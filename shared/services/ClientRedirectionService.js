import {TOKEN_CLIENT_STORAGE_KEY} from "./../constants/auth"
import {CLIENT_ROUTE_PREFIX} from "./../constants/clientRoutes"

export default class ClientRedirectionService {
    constructor() {
        
    }
    
    setAuth(token) {
        localStorage.setItem(TOKEN_CLIENT_STORAGE_KEY, token)
    }

    redirect(path) {
        window.location = CLIENT_ROUTE_PREFIX + path
    }
    
    redirectWithAuth(path, token) {
        this.setAuth(token)
        this.redirect(path)
    }
}