require("./createTargetStyling.scss")
import React from "react"
import ReactDOM from "react-dom"
import BasePage from "./../shared/extendables/BasePage"

export default class CreateTargetPage extends BasePage {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return(
            <div>
                <p className="something">this is the targets page</p>
            </div>
        )
    }
}