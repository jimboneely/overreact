import React, { Component} from "react";
import { Link } from "react-router-dom";
import UserImage from "../UserImage/";
import './NavBar.css';
import firebase, { auth, provider } from '../../firebase.js';
// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        this.props.handleAuth(user);
      } 
    })};
  state={
    user: null
  };
  login() {
    auth.signInWithPopup(provider) 
      .then((result) => {
        const user = result.user;
        this.props.handleAuth(user);
        this.setState({
          user
        });
      });
  };
  logout() {
    auth.signOut()
      .then(() => {
        this.setState({
          user: null
        });
      });
  };
  render() {

    return (
    <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">
          MadPass
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
        {this.state.user ?
          <React.Fragment>
          <button className="loginButton" onClick={this.logout}>Log Out</button>
          <UserImage img={this.state.user.photoURL}/>
          </React.Fragment>
          :
          <button className="loginButton" onClick={this.login}>Log In</button>              
        }

        </li>
      
      </ul>
    </div>
  </nav>)
  }
}
export default NavBar;