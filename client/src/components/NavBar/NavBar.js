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



<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">MadPass</a>
    </div>
    <ul class="nav navbar-nav">
     
    </ul>
    <ul class="nav navbar-nav navbar-right">
     <li class="dropdown"><a class="dropdown-toggle" data-toggle="dropdown" href="#"><i class="fa fa-bars  fa-fw" aria-hidden="true"></i></a>
        <ul class="dropdown-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Something Else</a></li>
        </ul>
      </li>
      
    </ul>
  </div>
</nav> 