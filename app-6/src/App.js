import React, {Component} from 'react';
import ToDo from './component/To-do.component'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state={
      inputval: '',
      toToList: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(){
    this.setState({
      toToList: [...this.state.toToList, this.state.inputval],
      inputval:''
    })
  }

  handleChange(e){
    this.setState({
      inputval: e.target.value
    })
  }
  render(){
    let updatedToDo = this.state.toToList.map((element, index)=> <ToDo key={index} todo={element}/>)
    return(
      <div className="App">
        <h1>My to-do list:</h1>
        <input placeholder="To do Item" value={this.state.inputval} type="text" onChange={this.handleChange}/>
        <button onClick={this.handleClick}>Add</button>
        {updatedToDo}
      </div>
    )
  }
}

export default App;
