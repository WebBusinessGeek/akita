import {TOKEN_CLIENT_STORAGE_KEY} from "./../constants/auth"
import {CLIENT_ROUTE_PREFIX} from "./../constants/clientRoutes"

export default class ClientRedirectionService {
    constructor() {
        
    }
    
    setAuth(token) {
        localStorage.setItem(TOKEN_CLIENT_STORAGE_KEY, token)
    }
    
    redirectWithAuth(path, token) {
        this.setAuth(token)
        window.location = CLIENT_ROUTE_PREFIX + path
    }
}