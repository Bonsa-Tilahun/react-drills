import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: '',
            password: ''
        }

        this.handleUserName = this.handleUserName.bind(this)
        this.handlePassword = this.handlePassword.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handlePassword(e){
        this.setState({
            password: e.target.value
        })
        console.log(this.state)

    }

    handleUserName(e){
        this.setState({
            userName: e.target.value
        })
        console.log(this.state)
    }
    handleClick(){
        alert(`Username: ${this.state.userName} Password: ${this.state.password}`)
    }
    render(){
        return(
            <div>
                <input placeholder="Username" type="text" onChange={this.handleUserName}/>
                <input placeholder="Password" type="text" onChange={this.handlePassword}/>
                <button onClick={this.handleClick}> submit</button>
            </div>
        )
    }
}

export default Login