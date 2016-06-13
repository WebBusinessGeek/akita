import {TOKEN_CLIENT_STORAGE_KEY} from "./../constants/auth"
import {SUCCESSFUL_API_STATUS} from "./../constants/apiResponses"
import ClientHTTPRequestService from "./../services/ClientHTTPRequestService"

export default class AuthenticationCheckService {
    constructor() {

    }

    isAuthenticated() {
        let token = localStorage.getItem(TOKEN_CLIENT_STORAGE_KEY)
        if(token) {
            let successCB = (response) => {
                return response.status === SUCCESSFUL_API_STATUS
            }
            let errorCB = (xhr, status, err) => {
                return console.log(err)
            }
            let request = new ClientHTTPRequestService(successCB, errorCB)
            request.postRequest("/tokens/validate", {token: token})
        } else {
            return false
        }
    }
}