import React, { Component } from 'react';
import "../Article.css";
import "../App.css";
import PropTypes from "prop-types";
import * as api from "../api.js";

class Login extends Component {
    state = {
      username: "emmajarvis",
      err: null
    }

  render() {
    if (this.props.user.username) return this.props.children;
    else {
    return ( 

      <div id="App">
      <h1>Please log in with your username</h1>
        <form id="loginContainer" onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" name="username" 
          onChange={this.handleChange} value={this.state.username}/>
        <button>Log in </button>
        {this.state.err ? <p>User does not exist!</p> : <></>}
      </form>
      </div>
    )
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    api.getUser(this.state.username)
      .then(user => this.props.login(user.username))
      .catch(err =>
        this.setState({
          err
        })
      );
  };
  
  handleChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
}

Login.propTypes = {
  user: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

export default Login;