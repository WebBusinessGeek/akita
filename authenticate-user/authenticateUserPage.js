require("./authenticateUserStyling.scss")
import React from "react"
import ReactDOM from "react-dom"
import BasePage from "./../shared/extendables/BasePage"
import {Link} from "react-router"
import {INCOMPLETE_FORM_ERROR, INVALID_EMAIL_FORMAT_ERROR} from "./../shared/constants/notifications"
import validator from "validator"
import Redirect from "./../shared/services/ClientRedirectionService"
import {DASHBOARD_ROUTE} from "./../shared/constants/clientRoutes"
import {AUTHENTICATE_USER_ENDPOINT} from "./../shared/constants/apiEndpoints"



export default class AuthenticateUserPage extends BasePage {
    constructor() {
        super()
        this.state = {
            errorMessage : null
        }
    }

    handleSubmit(e) {
        this.setState({errorMessage : null})
        e.preventDefault()

        let email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()
        let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()

        if(!email || !password) {
            return this.throwError(INCOMPLETE_FORM_ERROR)
        }
        if(!validator.isEmail(email)) {
            return this.throwError(INVALID_EMAIL_FORMAT_ERROR)
        }

        this.sendAuthenticationRequest(email, password)
    }

    sendAuthenticationRequest(email, password) {
        let successCB = (response) => {
            if(response.status_code != 200) {
                return this.throwError(response.message)
            }
            let redirect = new Redirect()
            redirect.redirectWithAuth(DASHBOARD_ROUTE, response.payload.data.token)
        }

        let errorCB = (xhr, status, err) => {
            return this.logError(err)
        }

        let Request = this.newHTTPRequest(successCB, errorCB)
        Request.postRequest(AUTHENTICATE_USER_ENDPOINT, {email: email, password: password})
    }

    render() {
        return(
            <div id="authenticate-user-form-container" className="user-form-container">
                <form id="authenticate-user-form" className="text-center">
                    <h2 id="authenticate-user-form-heading" className="boldText">akita</h2>
                    <p id="authenticate-user-form-blurb" className="greyText">Sign into your account below.</p>
                    <div>{this.state.errorMessage != null ? this.renderErrorMessage() : false}</div>
                    <div id="authenticate-user-form-email-group" className="form-group">
                        <label htmlFor="emailInput"></label>
                        <input type="email" className="form-control user-form-inputs" ref="emailInput" id="emailInput" placeholder="Email" />
                    </div>
                    <div id="authenticate-user-form-password-group" className="form-group">
                        <label htmlFor="passwordInput"></label>
                        <input type="password" className="form-control user-form-inputs" ref="passwordInput" id="passwordInput" placeholder="Password" />
                    </div>
                    <button id="authenticateBtn" className="btn user-form-main-btn greenBtn" onClick={this.handleSubmit}>Log In</button>
                </form>
                <div id="create-account-button-container" className="user-form-secondary-btn-container">
                    <p>Don't have an account? <Link to={`/`}><button id="create-account-btn-link" className="btn pinkBtn user-form-secondary-btn ">Sign Up</button></Link></p>
                </div>
            </div>
        )
    }
}