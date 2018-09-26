import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Component.js'

class App extends Component {

  state = {
    counter:1 
  }
  render() {
    return (
      <div className="App">
        <Hello count={this.state.counter} />
      </div>
    );
  }
}

export default App;
