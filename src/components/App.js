import React, { Component } from 'react'
import './App.css'
import ItemsList from '../containers/ItemsList'
import ActiveItem from '../containers/ActiveItem'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ItemsList />
        <ActiveItem />
      </div>
    );
  }
}

export default App;
