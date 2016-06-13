import AuthenticationCheckService from "./../services/AuthenticationCheckService"

export default function requireAuth(nextState, replace, cb){
    let authCheck = new AuthenticationCheckService()
    authCheck.isAuthenticatedAsync() 
        .then((auth) => {
            (auth) ? true : replace("/")
            cb()
        })
        .catch((err) => {
            console.log(err)
            cb()
        })
}