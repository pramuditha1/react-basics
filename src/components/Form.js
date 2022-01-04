import React, { Component } from 'react'

export class Form extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            username: '',
            role: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(this.state)
    }

    handleRoleChange = (event) => {
        this.setState({
            role: event.target.value
        })
        console.log(event.target.value)
        console.log(this.state)
    }

    handleSubmit = (event) => {
        alert(`username : ${this.state.username} has role: ${this.state.role}`)
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    User Data Form
                    <div>
                        <label>Username</label>
                        <input type="text" value = {this.state.username} 
                        onChange={this.handleUsernameChange}/>
                    </div>
                    <div>
                        <label>Role</label>
                        <select value={this.state.role} onChange={this.handleRoleChange}>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                            <option value="operator">Operator</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
