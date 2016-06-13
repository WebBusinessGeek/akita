import React from "react"
import { Router, IndexRoute, Route, hashHistory } from "react-router"
import {DASHBOARD_ROUTE} from "./../shared/constants/clientRoutes"

import UIContainer from "./uiContainer"
import RegisterUserPage from "./../register-user/registerUserPage"
import Dashboard from "./dashboard"

import redirectIfAuthenticated from "./../shared/middleware/redirectIfAuthenticated"
import requireAuth from "./../shared/middleware/requireAuth"

let routes = (
    <Router history={hashHistory}>
       <Route path="/" component={UIContainer}>
           <IndexRoute component={RegisterUserPage} onEnter={redirectIfAuthenticated} />
           <Route path={DASHBOARD_ROUTE} component={Dashboard} onEnter={requireAuth}>
           </Route>
       </Route>
    </Router>
)

export default routes