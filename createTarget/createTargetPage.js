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
                <p className="something">Create your target</p>
                <form className="form-inline">
                    <div className="form-group">
                        <label htmlFor="targetName">Name</label>
                        <input type="text" className="form-control input-lg" id="targetName" placeholder="Marketing Page Visitors"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="targetDescription">Description</label>
                        <input type="text" className="form-control input-lg" id="targetDescription" placeholder="People that have visited our marketing pages."/>
                    </div>
                    <button type="submit" className="pinkBtn">Save</button>
                </form>
            </div>
        )
    }
}