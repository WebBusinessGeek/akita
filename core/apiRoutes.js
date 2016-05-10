import registerUserAPIHandler from "./../register-user/registerUserAPIHandler"
import APP from "./app"


APP.use("/api/register-user", registerUserAPIHandler)
