import React from "react"
import ClientHTTPRequestService from "./../services/ClientHTTPRequestService"
import {DASHBOARD_ROUTE} from "./../constants/clientRoutes"

export default class BasePage extends React.Component {
    constructor() {
        super()
        this.newHTTPRequest = this.newHTTPRequest.bind(this)
    }
    
    logError(error) {
        console.log(error)
    }
    
    newHTTPRequest(successCB, errorCB) {
        return new ClientHTTPRequestService(successCB, errorCB)
    }

    createDashboardRoute(route) {
        return DASHBOARD_ROUTE + "/" + route
    }
    
    
    
}