import {isProductionEnv} from "./../../environment"

let getHost = () => {
    return (isProductionEnv() ? "PRODUCTION_SERVER" : "http://localhost:9090")
}

const ROOT_API_ENDPOINT = getHost()
const REGISTER_USER_ENDPOINT = "/api/register-user"


module.exports = {
    ROOT_API_ENDPOINT : ROOT_API_ENDPOINT,
    REGISTER_USER_ENDPOINT : REGISTER_USER_ENDPOINT
}
