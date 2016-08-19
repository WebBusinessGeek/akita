import {isProductionEnv} from "./../../environment"

let getHost = () => {
    return (isProductionEnv() ? "PRODUCTION_SERVER" : "http://localhost:9090")
}
export const ROOT_API_ENDPOINT = getHost()
export const API_ENDPOINT_PREFIX = "/api"

let createEndpoint = (path) => {
    return API_ENDPOINT_PREFIX + path
}

export const REGISTER_USER_ENDPOINT = createEndpoint("/register-user")
export const TOKEN_VALIDATION_ENDPOINT = createEndpoint("/token-validate")


