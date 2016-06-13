import AuthenticationCheckService from "./../services/AuthenticationCheckService"

export default function requireAuth(nextState, replace, cb){
    console.log('DEBUG***: calling requireAuth')
    let authCheck = new AuthenticationCheckService()
    if(!authCheck.isAuthenticated()) {
        console.log('DEBUG***: requireAuth.. returns Not Authenticated')
        replace("/")
        return cb()
    } else {
        console.log('DEBUG***: requireAuth.. returns Not Authenticated')
        return cb()
    }
}