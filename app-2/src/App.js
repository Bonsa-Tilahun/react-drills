import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super()
    
    this.state={
      list: ["messi", "Ronaldinho", "Ronaldo", "Rashford", "DeGay"]
    }
  }
  render(){
    return (
      <div className="App">
        <h1>Favorite footballers:</h1>
        <ul>
          {this.state.list.map((e, i)=>(
            <li style={{
              listStyle: "none"
            }} key={i}> 
              <h2>{e}</h2>
            </li>
          ) )}
        </ul>
    </div>
    )
  }
}

export default App;
