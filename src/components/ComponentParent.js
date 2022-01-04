import React, { Component } from 'react'
import ComponentChild from './ComponentChild'

export class ComponentParent extends Component {
    constructor (props) {
        super(props)
        this.state = {
            parentName: 'Parent'
        }
    }

    greetParent = () => {
        alert(`Hello ${this.state.parentName}`)
    }
    render() {
        return (
            <div>
                <ComponentChild greetHandler={this.greetParent}/>
            </div>
        )
    }
}

export default ComponentParent
