import RegisterUserLogic from "./../RegisterUserLogic"
import {failResponse} from "./../../shared/services/APIResponseService"
import {MISSING_EMAIL_ERROR, MISSING_PASSWORD_ERROR, INVALID_EMAIL_FORMAT_ERROR,
    INVALID_PASSWORD_FORMAT_ERROR, USER_ALREADY_EXISTS_ERROR, INVALID_EMAIL_ERROR,
    USER_REGISTRATION_SUCCESS} from "./../../shared/constants/notifications"
import sinon from "sinon"
import chai from "chai"
let assert = chai.assert

describe("RegisterUserLogic", () => {
    describe("run", () => {
        describe("if no email present", () => {
            let res = ""
            let classUnderTest = new RegisterUserLogic()

            let email = undefined
            let password = null

            let returnCB = (response, cb) => {return cb()}
            let jsonResponseStub = sinon.stub(classUnderTest, "jsonResponse", returnCB)

            before((done) => {

                classUnderTest.run(email, password, () => {
                    done()
                })
            })
            it("should call this.jsonResponse with failResponse(MISSING_EMAIL_ERROR)", (done) => {
                let expectedArg = failResponse(MISSING_EMAIL_ERROR)
                assert.isTrue(jsonResponseStub.calledWith(expectedArg))
                done()
            })
        })
        describe("if no password present", () => {
            let res = ""
            let classUnderTest = new RegisterUserLogic()

            let email = "kevw12188@gmail.com"
            let password = null

            let returnCB = (response, cb) => {return cb()}
            let jsonResponseStub = sinon.stub(classUnderTest, "jsonResponse", returnCB)

            before((done) => {

                classUnderTest.run(email, password, () => {
                    done()
                })
            })
            it("should call this.jsonResponse with failResponse(MISSING_PASSWORD_ERROR)", (done) => {
                let expectedArg = failResponse(MISSING_PASSWORD_ERROR)
                assert.isTrue(jsonResponseStub.calledWith(expectedArg))
                done()
            })
        })
        describe("if badly formatted email", () => {
            let res = ""
            let classUnderTest = new RegisterUserLogic(res)

            let email = "invalid@format"
            let password = "bad"

            let returnCB = (response, cb) => {return cb()}
            let jsonResponseStub = sinon.stub(classUnderTest, "jsonResponse", returnCB)

            before((done) => {

                classUnderTest.run(email, password, () => {
                    done()
                })
            })
            it("should return failResponse with INVALID_EMAIL_FORMAT_ERROR", (done) => {
                let expectedArg = failResponse(INVALID_EMAIL_FORMAT_ERROR)
                assert.isTrue(jsonResponseStub.calledWith(expectedArg))
                done()
            })
        })
        describe("if badly formatted password", () => {
            let res = ""
            let classUnderTest = new RegisterUserLogic(res)

            let email = "valid@format.com"
            let password = "bad"

            let returnCB = (response, cb) => {return cb()}
            let jsonResponseStub = sinon.stub(classUnderTest, "jsonResponse", returnCB)

            before((done) => {

                classUnderTest.run(email, password, () => {
                    done()
                })
            })
            it("should return failResponse with INVALID_EMAIL_FORMAT_ERROR", (done) => {
                let expectedArg = failResponse(INVALID_PASSWORD_FORMAT_ERROR)
                assert.isTrue(jsonResponseStub.calledWith(expectedArg))
                done()
            })
        })
        describe("if all checks pass", () => {
            let res = ""
            let classUnderTest = new RegisterUserLogic(res)

            let email = "valid@format.com"
            let password = "validPassword"

            let returnCB = (email, password, cb) => {return cb()}
            let attemptToRegisterUserStub = sinon.stub(classUnderTest, "attemptToRegisterUser", returnCB)

            before((done) => {

                classUnderTest.run(email, password, () => {
                    done()
                })
            })
            it("should call attemptToRegisterUser with email and password passed", (done) => {
                let expectedArg1 = email
                let expectedArg2 = password
                assert.isTrue(attemptToRegisterUserStub.calledWith(expectedArg1, expectedArg2))
                done()
            })
        })
    })
    describe("jsonResponse", () => {
        describe("if called", () => {
            let res = {
                json : (response) => {return response}
            }
            let classUnderTest = new RegisterUserLogic(res)
            let response = failResponse(MISSING_EMAIL_ERROR)

            let jsonSpy = sinon.spy(classUnderTest.res, "json")

            before((done) => {
                classUnderTest.jsonResponse(response, () => {
                    done()
                })
            })
            it("should call the res.json function", (done) => {
                let expectedArg = response
                assert.isTrue(jsonSpy.calledWith(expectedArg))
                done()
            })
        })
    })
    describe("attemptToRegisterUser", () => {})
})