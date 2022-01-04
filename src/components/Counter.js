import React, { Component } from 'react'

class Counter extends Component {

    constructor (props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increment = () => {
        this.setState({
            count : this.state.count + 1
        }, () => {console.log(`Call back count value: `,this.state.count)});

        console.log(`Count: `, this.state.count)
    }

    incrementPreviousState = () => {
        this.setState(previousState => ({
            count: previousState.count +1
        }));
    }

    incrementByFive = () => {
        this.incrementPreviousState()
        this.incrementPreviousState()
        this.incrementPreviousState()
        this.incrementPreviousState()
        this.incrementPreviousState()
    }


    render() {
        return (
            <div>
                <div>Count : {this.state.count}</div>
                <div><button onClick={() => this.increment()}> increment by 1 </button></div>
                <div><button onClick={() => this.incrementByFive()}> increment by 5 </button></div>
            </div>
        )
    }
}

export default Counter
