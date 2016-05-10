import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, hashHistory } from "react-router"
import { createHistory, useBasename } from "history"

import UIContainer from "./uiContainer"
import RegisterUserPage from "./../register-user/registerUserPage"

let routes = (
    <Router history={hashHistory}>
       <Route path="/" component={UIContainer}>
           <Route path="/register" component={RegisterUserPage} />
       </Route>
    </Router>
)

export default routes