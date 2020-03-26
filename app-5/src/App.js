import React, { Component } from 'react';
import Image from './component/Image.component'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state={
      imgUrl: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.hancleClick = this.hancleClick.bind(this)
  }

  handleChange(e){
    this.setState({
      imgUrl: e.target.value
    })
  }
  hancleClick(){
    this.setState({
      imgUrl:''
    })
  }
  render(){
    return(
      <div className="App">
        <input type="text" placeholder="Image URL" onChange={this.handleChange}/>
        <button onClick={this.hancleClick}>Clear Image</button>
        {
          this.state.imgUrl !== ''?
          <Image imgUrl={this.state.imgUrl}/>
          : null
        }
        
      </div>
    )
  }
}

export default App;
