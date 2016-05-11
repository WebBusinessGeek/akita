import registerUserAPIHandler from "./../register-user/registerUserAPIHandler"
import APP from "./app"
import apiEndpoints from "./../shared/constants/apiEndpoints"

APP.use(apiEndpoints.REGISTER_USER_ENDPOINT, registerUserAPIHandler)
