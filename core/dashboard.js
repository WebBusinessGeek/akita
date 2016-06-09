import React from "react"
import ReactDOM from "react-dom"

export default class Dashboard extends React.Component{
    constructor() {
        super()
        this.state = {}
    }

    render() {
        return(
            <div>
                <p>This is the dashboard</p>
                {this.props.children}
            </div>

        )
    }
}