import React from "react"
import ClientHTTPRequestService from "./../services/ClientHTTPRequestService"

export default class BasePage extends React.Component {
    constructor() {
        super()
        this.newHTTPRequest = this.newHTTPRequest.bind(this)
    }
    
    newHTTPRequest(successCB, errorCB) {
        return new ClientHTTPRequestService(successCB, errorCB)
    }
    
}