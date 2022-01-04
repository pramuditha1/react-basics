import React, { Component } from 'react'

export class RefsDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()
    }

    componentDidMount(){
        console.log(this.inputRef)
        this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefsDemo
