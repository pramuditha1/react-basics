import React, { Component } from 'react'

export class LifeCycleUpdateB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Pramuditha'
        }
        console.log('LifeCycleB constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifeCycleB getDerivedStateFromProps')
        return null;
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }

    
    shouldComponentUpdate(){
        console.log('LifeCycleB shouldComponentUpdate')
        return true
    }
    
    getSnapshotBeforeUpdate(){
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('LifeCycleB componentDidUpdate')
    }
    
    render() {
        console.log('LifeCycleB render')
        return (
            <div>
               LifeCycle Update B
            </div>
        )
    }
}

export default LifeCycleUpdateB
