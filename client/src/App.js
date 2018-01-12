import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Custom Components
import Authentication from './components/Authentication';
// End Custom Components

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Mad Pass</h1>
        </header>
        <p className="App-intro">
          <Authentication />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
