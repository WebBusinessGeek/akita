import React from "react"
import { Router, IndexRoute, Route, hashHistory } from "react-router"

import UIContainer from "./uiContainer"
import RegisterUserPage from "./../register-user/registerUserPage"

let routes = (
    <Router history={hashHistory}>
       <Route path="/" component={UIContainer}>
           <IndexRoute component={RegisterUserPage} />
       </Route>
    </Router>
)

export default routes