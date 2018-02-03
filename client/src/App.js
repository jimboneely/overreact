import React, { Component } from 'react';
import QuestionGen from "./components/QuestionGen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// Custom Components
import Authentication from './components/Authentication';
import MainPage from './components/MainPage/';
import NavBar from './components/NavBar/';
import ImageDisplay from './components/ImageDisplay/';
import SimpleSlider from './components/Slide/';
// End Custom Components

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
<<<<<<< HEAD
        <NavBar/ >
=======
          <NavBar />
>>>>>>> 893345b838fa35274ee822c6183a721a3ef3a455
          <Route exact path="/" component={MainPage} / >
          <Route exact path="/questiongen" component={QuestionGen} />
          <Route exact path="/simpleslider" component={SimpleSlider} />

      </div>
      </Router>
    );
  }
}

export default App;
