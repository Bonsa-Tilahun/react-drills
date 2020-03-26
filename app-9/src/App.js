import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import Header from './Components/Header.component';
import SignUp from './Pages/Signup.component';
import Detail from './Pages/Details.component';
import HomePage from './Pages/Homepage.component';

class App extends Component {
    constructor() {
        super()
        this.state = {
            userLogIn: false
        }
    }

    handleLogInLogOut = () =>{
      this.setState({
        userLogIn: !this.state.userLogIn
      })
    }

    render(){
      return(
        <div className="App">
          <Header userLoggedIn={this.state.userLogIn} handleLogInLogOut={this.handleLogInLogOut}/>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/detail' component={Detail} />
            <Route exact path='/signIn' component={SignUp} />
          </Switch>
        </div>
      )
    }
}

export default App;