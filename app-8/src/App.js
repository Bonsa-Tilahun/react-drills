import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state={
      apiResponse:''
    }
  }

  componentDidMount(){
    let randNum = Math.round(Math.random() *100)
    console.log(randNum)
    axios.get(`https://swapi.co/api/people/${randNum}`).then(response =>{
      this.setState({
        apiResponse: response.data
      })
    })
  }
  render(){
    console.log(this.state)
    return(
      <div className="App">
        <h4>Name: {this.state.apiResponse.name}</h4>
        <h4>Heigh: {this.state.apiResponse.height}</h4>
        <h4>Gender: {this.state.apiResponse.gender}</h4>
        {/* <h4>Number of Films: {this.state.apiResponse.films.length}</h4> */}
      </div>
    )
  }
}


export default App;
