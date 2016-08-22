require("./authenticateUserStyling.scss")
import React from "react"
import ReactDOM from "react-dom"
import BasePage from "./../shared/extendables/BasePage"
import {Link} from "react-router"


export default class AuthenticateUserPage extends BasePage {
    constructor() {
        super()
        this.state = {
            errorMessage : null
        }
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