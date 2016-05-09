import RegisterUserAPIHandler from "./../registerUserAPIHandler"

import sinon from "sinon"
import chai from "chai"
const ASSERT = chai.assert


describe("RegisterUserAPIHandler", () => {
    it("should return true", () => {
        ASSERT.isTrue(RegisterUserAPIHandler.something)
    })
})