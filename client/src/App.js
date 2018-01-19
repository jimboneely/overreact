import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// Custom Components
import Authentication from './components/Authentication';
import MainPage from './components/MainPage/';
import NavBar from './components/NavBar/';
// End Custom Components

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
        <MainPage />
          <Switch>

          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
