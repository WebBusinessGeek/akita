import registerUserAPIHandler from "./../register-user/registerUserAPIHandler"
import APP from "./app"
import apiEndpoints from "./../shared/constants/apiEndpoints"
import TokenValidationHandler from "../shared/services/TokenValidationHandler"

APP.use(apiEndpoints.REGISTER_USER_ENDPOINT, registerUserAPIHandler)
APP.use("/tokens/validate", TokenValidationHandler)
