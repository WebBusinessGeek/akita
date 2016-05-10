import React from "react"
import ReactDOM from "react-dom"
import { Router, Route, IndexRoute, Link, History, browserHistory } from "react-router"
import { createHistory, useBasename } from "history"

import RegisterUserPage from "./../register-user/registerUserPage"

let routes = (
    <Router history={browserHistory}>
       <Route path="/register" component={RegisterUserPage}/>
    </Router>
)

export default routes