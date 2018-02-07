import React, { Component } from 'react';
import QuestionGen from "./components/QuestionGen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase, {auth} from './firebase'; 
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
    this.handlePassPhrase = this.handlePassPhrase.bind(this);
    this.state={
      user: "",
      passPhrase: ""
    }

  }
  handleAuth(e){
    this.setState({
      user:e
    })
    this.handlePassPhrase(this.user);
  }
  handlePassPhrase(e){
    console.log("handlePassPhrase",this.state.user.uid)
    firebase.database().ref('users/' + this.state.user.uid).once("value",
        (data) => {
          console.log("App-FB",data.val());
          this.setState({
            passPhrase: data.val()
          })
        }
      )
  }
  render() {
    return (
      <Router>
      <div className="App">
          <NavBar handleAuth={this.handleAuth}/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/questiongen" component={QuestionGen} />
          <Route exact path="/simpleslider" component={SimpleSlider} />
          <Route exact path="/userpage" component={() => 
            (<UserPage user={this.state.user} passphrase = {this.state.passPhrase}/> ) } />
          

      </div>
      </Router>
    );
  }
}

export default App;
