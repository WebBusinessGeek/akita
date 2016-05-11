import React from "react"
import BasePage from "./../shared/extendables/BasePage"

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
        Request.getRequest("/api/register-user")
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