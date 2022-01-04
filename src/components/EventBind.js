import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props){
        super(props)
        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // //for method 1, 2, 3
    // clickHandler () {
    //     console.log(this)
    //     this.setState({
    //         message: 'bye'
    //     })
    // }

    //method 4 : write event using arrow functions
    clickHandler = () => {
        console.log(this)
        this.setState({
            message: 'bye'
        })
    }

    render() {
        return (
            <div>
                <div><h1>{this.state.message}</h1></div>
                {/* <div><button onClick={this.clickHandler.bind(this)}>Event click</button></div> */}
                {/* <div><button onClick={() => this.clickHandler()}>Event click</button></div> */}
                <div><button onClick={this.clickHandler}>Event click</button></div>
            </div>
        )
    }
}

export default EventBind
