import React, { Component } from 'react';
import NewTask from './components/NewTask.component'
import List from './components/List.component'
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state={
      toDoList:[],
      inputVal:''
    }
    this.handleClick = this.handleClick.bind(this)
    this.hadleChange = this.hadleChange.bind(this)
  }

  handleClick(){
    this.setState({
      toDoList: [...this.state.toDoList, this.state.inputVal],
      inputVal: ''
    })
  }

  hadleChange(e){
    this.setState({
      inputVal: e.target.value
    })
  }

  render(){
    return (
      <div className="App">
        <h2>My to-do List:</h2>
        <NewTask inputVal={this.state.inputVal} add={this.handleClick} changeVal={this.hadleChange}/>
        <List toDoList={this.state.toDoList}/>
      </div>
    )
  }
 
}

export default App;
