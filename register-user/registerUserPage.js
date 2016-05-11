import React from "react"
import BasePage from "./../shared/extendables/BasePage"
import {REGISTER_USER_ENDPOINT} from "./../shared/constants/apiEndpoints"

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
            <div>
                <p>This is the register user components</p>
                <button class="btn btn-primary" onClick={this.check}>Click</button>
            </div>
        )
    }



}