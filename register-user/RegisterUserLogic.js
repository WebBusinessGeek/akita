import {successResponse, errorResponse, failResponse} from "./../shared/services/APIResponseService"
import {MISSING_EMAIL_ERROR, MISSING_PASSWORD_ERROR, INVALID_EMAIL_FORMAT_ERROR,
    INVALID_PASSWORD_FORMAT_ERROR, USER_ALREADY_EXISTS_ERROR, INVALID_EMAIL_ERROR, 
    USER_REGISTRATION_SUCCESS} from "./../shared/constants/notifications"
import {MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH} from "../shared/constants/auth"
import validator from "validator"
import User from "./../shared/db/models/User"
import bcrypt from "bcrypt"
import EmailValidator from "./../shared/services/EmailValidatorService"
import TokenProvider from "./../shared/services/TokenProviderService"


export default class RegisterUserLogic {
    constructor(res) {
        this.res = res
    }
    
    run(email, password, cb) {
        if(!email) {
            return this.jsonResponse(failResponse(MISSING_EMAIL_ERROR), cb)
        }
        if(!password) {
            return this.jsonResponse(failResponse(MISSING_PASSWORD_ERROR), cb)
        }
        if(!validator.isEmail(email)) {
            return this.jsonResponse(failResponse(INVALID_EMAIL_FORMAT_ERROR), cb)
        }
        if(!validator.isLength(password, {min : MIN_PASSWORD_LENGTH, max : MAX_PASSWORD_LENGTH}) || !validator.isAlphanumeric(password)) {
            return this.jsonResponse(failResponse(INVALID_PASSWORD_FORMAT_ERROR), cb)
        }
        return this.attemptToRegisterUser(email, password, cb)
    }

    jsonResponse(response, cb) {
        this.res.json(response)
        return cb()
    }
    
    attemptToRegisterUser(email, password) {
        User.findOne({where: {email: email}})
            .then((user) => {
                if(user) {
                    return this.jsonResponse(failResponse(USER_ALREADY_EXISTS_ERROR))
                }
                let emailValidator = new EmailValidator()
                emailValidator.verifyAsync(email)
                    .then((resp) => {
                        if(!resp.format_valid || !resp.smtp_check) {
                            return this.jsonResponse(failResponse(INVALID_EMAIL_ERROR))
                        } else {
                            User.create({
                                email: email,
                                password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
                            })
                                .then((user) => {
                                    let tokenProvider = new TokenProvider()
                                    let token = tokenProvider.newToken(user)
                                    return this.jsonResponse(successResponse(USER_REGISTRATION_SUCCESS, {token : token}))
                                })
                        }
                    })
            })
            .catch((err) => {
                return this.jsonResponse(errorResponse(err))
            })
    }

    
}