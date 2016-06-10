import AuthenticationCheckService from "./../services/AuthenticationCheckService"

export default function requireAuth(nextState, replaceState, cb){
    let authCheck = new AuthenticationCheckService()
    if(!authCheck.isAuthenticated()) {
        replaceState({}, "/")
        return cb()
    } else {
        return cb()
    }
}