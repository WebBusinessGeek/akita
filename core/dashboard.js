require("./dashboardStyling.scss")
import React from "react"
import ReactDOM from "react-dom"
import {Link} from "react-router"
import {DASHBOARD_ROUTE, TARGETS_ROUTE} from "./../shared/constants/clientRoutes"
import BasePage from "./../shared/extendables/BasePage"

export default class Dashboard extends BasePage{
    constructor() {
        super()
        this.state = {
            optionsShowing: null
        }
    }

    renderOptions() {
        let options = {
            create: this.renderCreateOptions(),
            account: this.renderAccountOptions(),
            view: this.renderViewOptions(),
        }
        return options[this.state.optionsShowing]
    }


    showOptions(itemClicked) {
        this.setState({
            optionsShowing : itemClicked.target.id
        })
        console.log("clicked")
    }

    renderCreateOptions() {
        return(
            <div id="new-options">
                <Link to={this.createDashboardRoute(TARGETS_ROUTE)}>Create new target</Link>
                <Link to={this.createDashboardRoute("")}>Create new Initiative</Link>
                <Link to={this.createDashboardRoute("")}>Create new Report</Link>
            </div>
        )
    }

    renderAccountOptions() {
        return(
            <div id="new-options">
                <Link to={this.createDashboardRoute("")}>Logout</Link>
                <Link to={this.createDashboardRoute("")}>Settings</Link>
            </div>
        )
    }

    renderViewOptions() {
        return(
            <div id="new-options">
                <Link to={this.createDashboardRoute("")}>Targets</Link>
                <Link to={this.createDashboardRoute("")}>Initiatives</Link>
                <Link to={this.createDashboardRoute("")}>Reports</Link>
            </div>
        )
    }

    render() {
        return(
            <div id="dashboard">
                <div id="dashboard-nav" className="text-center">
                    <img onClick={this.showOptions.bind(this)} id="create" className="center-block" src={require("./../shared/images/icons/plus.png")} />
                    <img onClick={this.showOptions.bind(this)} id="account" className="center-block" src={require("./../shared/images/icons/account_settings.png")} />
                    <img onClick={this.showOptions.bind(this)} id="view" className="center-block" src={require("./../shared/images/icons/eye.png")} />
                    <br/>
                    {this.state.optionsShowing ? this.renderOptions() : false}
                    {this.props.children}
                </div>
            </div>
        )
    }
}