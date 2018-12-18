import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Counter from './Counter';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}

export default hot(module)(App);
