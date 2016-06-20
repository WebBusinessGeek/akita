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
        describe("no email present", () => {
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
        describe("no password present", () => {
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
        /*if badly formatted email - should return correct error*/
        /*if badly formatted password - should return correct error*/
        /*if all checks pass, should call attemptToRegisterUser*/
    })
    describe("jsonResponse", () => {})
    describe("attemptToRegisterUser", () => {})
})