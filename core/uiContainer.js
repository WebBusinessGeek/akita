import React from "react"
import ReactDOM from "react-dom"

export default class UIContainer extends React.Component {
    render() {
        return(
            <div id="ui_container">
                {this.props.children}
            </div>
        )
    }
}