import React, { Component } from 'react';
import QuestionGen from "./components/QuestionGen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

// Custom Components
import MainPage from './components/MainPage/';
import NavBar from './components/NavBar/';
import ImageDisplay from './components/ImageDisplay/';
import SimpleSlider from './components/Slide/';
import UserPage from './components/UserPage';
// End Custom Components

class App extends Component {
  constructor(props) {
    super(props);
    this.handleAuth = this.handleAuth.bind(this);
    this.state={
      user: ""
    }
  }
  handleAuth(e){
    this.setState({
      user:e
    })
  }
  render() {
    return (
      <Router>
      <div className="App">
          <NavBar handleAuth={this.handleAuth}/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/questiongen" component={QuestionGen} />
          <Route exact path="/simpleslider" component={SimpleSlider} />
          <Route exact path="/userpage" component={UserPage} />

      </div>
      </Router>
    );
  }
}

export default App;
