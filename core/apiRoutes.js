import registerUserAPIHandler from "./../register-user/registerUserAPIHandler"
import APP from "./app"
import {REGISTER_USER_ENDPOINT, TOKEN_VALIDATION_ENDPOINT} from "./../shared/constants/apiEndpoints"
import TokenValidationHandler from "../shared/services/TokenValidationHandler"

APP.use(REGISTER_USER_ENDPOINT, registerUserAPIHandler)
APP.use(TOKEN_VALIDATION_ENDPOINT, TokenValidationHandler)
