import React, { Component } from "react";

class NavBar extends Component {
    state = {
        username:''
    }
    // Code below for logging in to Facebook
    handleFormLogin = event => {
        console.log(this.state.username?"True":"False")
        // if false prompt for login
    };
    componentDidMount(){
        console.log(this.state.username)
    }

    render () {
        return (

        <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid nav-div">
        {!this.state.username?
        <span className="nav navbar-nav navbar-right" onClick={this.handleFormLogin} ><button className="btn-login">Login</button></span>
        :<span onClick={this.handleFormLogin}>LogOut</span>}
        </div>
        </nav>
    );
    }
}

export default NavBar;



<nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">MadPass</a>
    </div>
    <ul className="nav navbar-nav">

    </ul>
    <ul className="nav navbar-nav navbar-right">
     <li className="dropdown"><a className="dropdown-toggle" data-toggle="dropdown" href="#"><i className="fa fa-bars  fa-fw" aria-hidden="true"></i></a>
        <ul className="dropdown-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Something Else</a></li>
        </ul>
      </li>

    </ul>
  </div>
</nav>
