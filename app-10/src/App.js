import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Product from './components/Product.component';
import Detail from './components/Details.component';

function App() {
  return(

  <Switch>
    <Route exact path='/' component={Product}/>
    <Route exact path='/details/:id' component={Detail}/>
  </Switch>
  )
}

export default App;
