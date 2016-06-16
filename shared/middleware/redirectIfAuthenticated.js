import AuthenticationCheckService from "./../services/AuthenticationCheckService"
import {DASHBOARD_ROUTE} from "./../constants/clientRoutes"

export default function redirectIfAuthenticated(nextState, replace, cb) {
    let authCheck = new AuthenticationCheckService()
    authCheck.isAuthenticatedAsync()
        .then((auth) => {
            (auth) ? replace(DASHBOARD_ROUTE) : false
            cb()
        })
        .catch((err) => {
            console.log(err)
            cb()
        })
}