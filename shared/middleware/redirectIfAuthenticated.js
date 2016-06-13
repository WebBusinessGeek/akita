import AuthenticationCheckService from "./../services/AuthenticationCheckService"

export default function redirectIfAuthenticated(nextState, replace, cb) {
    console.log('DEBUG***: calling redirectIfAuthenticated')
    let authCheck = new AuthenticationCheckService()
    if(!authCheck.isAuthenticated()) {
        console.log('DEBUG***: redirectIf.. returns Not Authenticated')
        return cb()
    } else {
        console.log('DEBUG***: redirectIf.. returns Authenticated')
        replace("/dashboard")
        return cb()
    }
}