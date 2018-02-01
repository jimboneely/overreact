import React, { Component} from "react";
import { Link } from "react-router-dom";
import UserImage from "../UserImage/"
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';
import './NavBar.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class NavBar extends Component {
  state={
    googleId:""
  };

  render() {
    const responseGoogleLoggedIn = (response) => {
      console.log(response.profileObj);
      this.setState(response.profileObj);
    }
    const responseGoogleLoggedInFail = (response) => {
      console.log(response);
    }
    let userMessage;
    if(!this.state.googleId) {
      userMessage = (
        <React.Fragment>
        <GoogleLogin className="gButton"
            clientId="1021589974701-olsqcgmj3pijos52r3t3j7dnid9ol0ht.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogleLoggedIn}
            onFailure={responseGoogleLoggedInFail} />
          <UserImage img={this.state.imageUrl}/>
          </React.Fragment>
      )
    } else {
      userMessage = (
        <GoogleLogout
          className="gButton"
          buttonText="Logout"
          onLogoutSuccess={responseGoogleLoggedInFail}>
        </GoogleLogout>
        
      )
    }
    return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          MadKeys
        </Link>
      </div>
      
      <ul className="nav navbar-nav navbar-right">

        <li
          className={
            window.location.pathname === "/" ||
            window.location.pathname === "/"
              ? "active"
              : ""
          }
        >
          <Link to="/">About</Link>
        </li>
        <li
          className={window.location.pathname === "/" ? "active" : ""}
        >
          {userMessage}
 
        </li>
      
      </ul>
    </div>
  </nav>)
  }
}
export default NavBar;