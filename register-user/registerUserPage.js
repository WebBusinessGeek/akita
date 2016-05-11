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
                <p id="register-user-form-blurb">Create your account</p>
                <form id="register-user-form">
                    <div id="register-user-form-email-group" className="form-group">
                        <label htmlFor="emailInput">Email</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="" />
                    </div>
                    <div id="register-user-form-password-group" className="form-group">
                        <label htmlFor="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="" />
                    </div>
                    <div id="register-user-form-confirm-password-group" className="form-group">
                        <label htmlFor="confirmPasswordInput">Confirm Password</label>
                        <input type="password" className="form-control" id="confirmPasswordInput" placeholder="" />
                    </div>
                    <button className="btn btn-lg btn-primary" onClick={this.check}>Click</button>
                </form>
                <p>Already have an account? <Link to={`/login`}><button id="log_in_link_btn" className="btn btn-default">Log In</button></Link></p>
            </div>
        )
    }



}