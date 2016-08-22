import {successResponse, failResponse} from "./../shared/services/APIResponseService"
import {MISSING_EMAIL_ERROR, MISSING_PASSWORD_ERROR, INVALID_EMAIL_FORMAT_ERROR,
    INVALID_PASSWORD_FORMAT_ERROR, INVALID_EMAIL_ERROR } from "./../shared/constants/notifications"
import User from "./../shared/db/models/User"
import bcrypt from "bcrypt"
import TokenProvider from "./../shared/services/TokenProviderService"
import Promise from "bluebird"


export default class AuthenticateUserLogic {
        constructor(res) {
            this.res = res
            Promise.promisifyAll(this)
        }

        run(email, password, cb) {
            if(!email) {
                return this.jsonResponse(failResponse(MISSING_EMAIL_ERROR), cb)
            }
            if(!password) {
                return this.jsonResponse(failResponse(MISSING_PASSWORD_ERROR), cb)
            }
            return this.attemptToAuthenticateUser(email, password, cb)
        }

        jsonResponse(response, cb) {
            this.res.json(response)
            cb()
        }

        attemptToAuthenticateUser(email, password, cb) {
            /*check if user exists*/
            /*check if password matches*/
            /*authenticate and provide token*/
            /*return authentication success message with token*/
        }

}