require("./registerUserStyling.scss")
import React from "react"
import BasePage from "./../shared/extendables/BasePage"
import {REGISTER_USER_ENDPOINT} from "./../shared/constants/apiEndpoints"
import {Link} from "react-router"


export default class RegisterUserPage extends BasePage {
    constructor() {
        super()
        this.check = this.check.bind(this)
    }
    check() {
        let successCB = (response) => {
            console.log(response)
        }

        let errorCB = (xhr, status, err) => {
            console.log(err)
        }

        let Request = this.newHTTPRequest(successCB, errorCB)
        Request.getRequest(REGISTER_USER_ENDPOINT)
    }

    render() {
        return(
            <div id="register-user-form-container">
                <form id="register-user-form" className="text-center">
                    <h2 id="register-user-form-heading">Hello!</h2>
                    <p id="register-user-form-blurb">Create your account below.</p>
                    <div id="register-user-form-email-group" className="form-group">
                        <label htmlFor="emailInput"></label>
                        <input type="email" className="form-control register-user-form-inputs" id="emailInput" placeholder="Email" />
                    </div>
                    <div id="register-user-form-password-group" className="form-group">
                        <label htmlFor="passwordInput"></label>
                        <input type="password" className="form-control register-user-form-inputs" id="passwordInput" placeholder="Password" />
                    </div>
                    <div id="register-user-form-confirm-password-group" className="form-group">
                        <label htmlFor="confirmPasswordInput"></label>
                        <input type="password" className="form-control register-user-form-inputs" id="confirmPasswordInput" placeholder="Confirm It" />
                    </div>
                    <button id="submit" className="btn btn-lg btn-primary greenBtn" onClick={this.check}>Create Account</button>
                </form>
                <p>Already have an account? <Link to={`/login`}><button id="log_in_link_btn" className="btn btn-default pinkBtn">Log In</button></Link></p>
            </div>
        )
    }



}