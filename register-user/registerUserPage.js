require("./registerUserStyling.scss")
import React from "react"
import ReactDOM from "react-dom"
import BasePage from "./../shared/extendables/BasePage"
import {REGISTER_USER_ENDPOINT} from "./../shared/constants/apiEndpoints"
import {Link} from "react-router"
import {MISMATCH_PASSWORD_ERROR, INCOMPLETE_FORM_ERROR, INVALID_EMAIL_FORMAT_ERROR} from "./../shared/constants/notifications"
import validator from "validator"
import Redirect from "./../shared/services/ClientRedirectionService"
import {DASHBOARD_ROUTE} from "./../shared/constants/clientRoutes"

export default class RegisterUserPage extends BasePage {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            errorMessage : null
        }
    }

    handleSubmit(e) {
        this.setState({errorMessage : null})

        e.preventDefault()

        let email = ReactDOM.findDOMNode(this.refs.emailInput).value.trim()
        let password = ReactDOM.findDOMNode(this.refs.passwordInput).value.trim()
        let conf_password = ReactDOM.findDOMNode(this.refs.conf_passwordInput).value.trim()

        if(!email || !password || !conf_password) {
            return this.throwError(INCOMPLETE_FORM_ERROR)
        }
        if(!validator.isEmail(email)) {
            return this.throwError(INVALID_EMAIL_FORMAT_ERROR)
        }

        return (password != conf_password) ?
            this.throwError(MISMATCH_PASSWORD_ERROR) : this.sendRegistrationRequest(email, password)
    }

    throwError(error) {
        this.setState({errorMessage : error})
    }

    sendRegistrationRequest(email, password) {
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
        Request.postRequest(REGISTER_USER_ENDPOINT, {email: email, password: password})
    }

    renderErrorMessage() {
        return(
            <div>
                <p className="error-text">{this.state.errorMessage}</p>
            </div>
        )
    }

    render() {
        return(
            <div id="register-user-form-container">
                <form id="register-user-form" className="text-center">
                    <h2 id="register-user-form-heading" className="boldText">akiita</h2>
                    <p id="register-user-form-blurb" className="greyText">Create your account below.</p>
                    <div>{this.state.errorMessage != null ? this.renderErrorMessage() : false }</div>
                    <div id="register-user-form-email-group" className="form-group">
                        <label htmlFor="emailInput"></label>
                        <input type="email" className="form-control register-user-form-inputs" ref="emailInput" id="emailInput" placeholder="Email" />
                    </div>
                    <div id="register-user-form-password-group" className="form-group">
                        <label htmlFor="passwordInput"></label>
                        <input type="password" className="form-control register-user-form-inputs" ref="passwordInput" id="passwordInput" placeholder="Password" />
                    </div>
                    <div id="register-user-form-confirm-password-group" className="form-group">
                        <label htmlFor="confirmPasswordInput"></label>
                        <input type="password" className="form-control register-user-form-inputs" ref="conf_passwordInput" id="confirmPasswordInput" placeholder="Confirm It" />
                    </div>
                    <div id="terms-conditions-container">
                        <label>
                            <input type="checkbox"/> I agree to the <a id="terms-conditions-link" href="#" target="_blank">Terms and Conditions</a>
                        </label>
                    </div>
                    <button id="createAccountBtn" className="btn btn-lg pinkBtn" onClick={this.handleSubmit}>Create Account</button>
                </form>
                <div id="log-in-button-container">
                    <p>Already have an account? <Link to={`/login`}><button id="log-in-btn-link" className="btn greenBtn">Log In</button></Link></p>
                </div>
            </div>
        )
    }



}