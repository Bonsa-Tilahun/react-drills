import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      inputval: ''
    }

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      inputval: event.target.value
    })
  }
 
    render(){
      return (
        <div style={{
          marginTop: '50px'
        }} className="App">
          <input style={{
            height: '30px', width: '80px'
          }} placeholder="type any text" type="text" onChange={this.handleChange}/><br/>
          <span>{this.state.inputval}</span>
        </div>
      )
    }

}

export default App;
