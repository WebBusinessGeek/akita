import {TOKEN_CLIENT_STORAGE_KEY} from "./../constants/auth"
import {SUCCESSFUL_API_STATUS} from "./../constants/apiResponses"
import ClientHTTPRequestService from "./../services/ClientHTTPRequestService"
import {TOKEN_VALIDATION_ENDPOINT} from "./../constants/apiEndpoints"
import Promise from "bluebird"

export default class AuthenticationCheckService {
    constructor() {
        Promise.promisifyAll(this)
    }

    isAuthenticated(cb) {
        let token = localStorage.getItem(TOKEN_CLIENT_STORAGE_KEY)
        if(token) {
            let successCB = (response) => {
                return cb(null, response.status == SUCCESSFUL_API_STATUS)
            }
            let errorCB = (xhr, status, err) => {
                cb()
            }
            let request = new ClientHTTPRequestService(successCB, errorCB)
            request.postRequest(TOKEN_VALIDATION_ENDPOINT, {token: token})
        } else {
            return cb(null, false)
        }
    }
}