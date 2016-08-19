import React from "react"

export default class UIContainer extends React.Component {
    render() {
        return(
            <div id="ui_container">
                {this.props.children}
            </div>
        )
    }
}