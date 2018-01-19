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
