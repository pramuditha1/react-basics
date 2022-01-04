import React, { Component } from 'react'
import LifeCycleUpdateB from './LifeCycleUpdateB'

export class LifeCycleUpdateA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pramuditha'
        }
        console.log('LifeCycleA constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('LifeCycleA shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleA componentDidUpdate')
    }

    changeStateOnClick = () => {
        this.setState({
            name: 'Niroshan'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <div>
               <div>LifeCycle Update A</div>
               <div><button onClick={this.changeStateOnClick}>Change State</button></div>
                <div><LifeCycleUpdateB></LifeCycleUpdateB></div>
            </div>
        )
    }
}

export default LifeCycleUpdateA
