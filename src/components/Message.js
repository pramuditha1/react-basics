import React, {Component} from "react";

class Message extends Component {
    constructor() {
        super()//this step is need because we extends Component to the class and that should inherited to constructor
        this.state = {
            visitorMessage : 'Welcome Visitor'
        }
    }

    changeMessage = () => {
        this.setState({
            visitorMessage : 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.visitorMessage}</h1>
                <button onClick = {() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message;