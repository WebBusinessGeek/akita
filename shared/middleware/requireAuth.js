import {TOKEN_CLIENT_STORAGE_KEY} from "./../constants/auth"
import ClientHTTPRequestService from "./../services/ClientHTTPRequestService"


let isAuthenticated = () => {
    let token = localStorage.getItem(TOKEN_CLIENT_STORAGE_KEY)
    if(token) {
        let successCB = (response) => {
            return response.status === "success"
        }
        let request = new ClientHTTPRequestService(successCB)
        request.postRequest("/tokens/validate", {token: token})
    } else {
        return false
    }
}
export function requireAuth(nextState, replaceState, cb){
    /*if authenticated return true / else replaceState with "/previous state*/
    
}