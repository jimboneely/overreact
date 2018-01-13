import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// Custom Components
import Authentication from './components/Authentication';
import MainPage from './components/MainPage/';
// End Custom Components

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <MainPage />
          <Switch>

          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
