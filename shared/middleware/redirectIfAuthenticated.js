import AuthenticationCheckService from "./../services/AuthenticationCheckService"

export default function redirectIfAuthenticated(nextState, replace, cb) {
    let authCheck = new AuthenticationCheckService()
    authCheck.isAuthenticatedAsync()
        .then((auth) => {
            (auth) ? replace("/dashboard") : false
            cb()
        })
        .catch((err) => {
            console.log(err)
            cb()
        })
}