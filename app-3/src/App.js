import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    
    this.state={
      list: ["messi", "Ronaldinho", "Ronaldo", "Rashford", "DeGay"],
      inputVal:''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(e){
    this.setState({
      inputVal: e.target.value
    })
  }

  render(){
    let filteredList = this.state.list.filter(name => name.toLowerCase().includes(this.state.inputVal.toLowerCase()))
    .map((element, index) => <h2 key={index}>{element}</h2>)
    return(
      <div className="App">
        <input placeholder="filter word" type="text" onChange={this.handleChange}/>
        {filteredList}
      </div>
    )
  }
}

export default App;
