import React from "react"
import { Router, IndexRoute, Route, browserHistory } from "react-router"
import {AUTHENTICATION_ROUTE, DASHBOARD_ROUTE, TARGETS_ROUTE} from "./../shared/constants/clientRoutes"

/*components*/
import UIContainer from "./uiContainer"
import RegisterUserPage from "../register-user/RegisterUserPage"
import AuthenticateUserPage from "../authenticate-user/authenticateUserPage"
import Dashboard from "./dashboard"
import CreateTargetPage from "../createTarget/createTargetPage"

/*middleware*/
import redirectIfAuthenticated from "./../shared/middleware/redirectIfAuthenticated"
import requireAuth from "./../shared/middleware/requireAuth"

/*routing*/
let routes = (
    <Router history={browserHistory}>
       <Route path="/" component={UIContainer}>
           <IndexRoute component={RegisterUserPage} onEnter={redirectIfAuthenticated} />
           <Route path={AUTHENTICATION_ROUTE} component={AuthenticateUserPage} />
           <Route path={DASHBOARD_ROUTE} component={Dashboard} onEnter={requireAuth}>
               <Route path={TARGETS_ROUTE} component={CreateTargetPage} />
           </Route>
       </Route>
    </Router>
)

export default routes