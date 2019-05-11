import React, { Component } from 'react';
import './App.css';
import './header.css';
import {Router} from '@reach/router';
import * as api from './api';
import Logout from './components/Logout';
import Login from "./components/Login";
import Home from './components/Home';
import Users from './components/Users';
import UserPage from './components/UserPage';
import NotFound from './components/NotFound';
// import Sites from "./components/Sites";
// import Site from "./components/Site";
import SitePoster from './components/SitePoster';

class App extends Component {
  state = {
    user: {},
    err: null
  }

  render() {
    return (
      <div id="bottom">
    <div id="App">
      <div className="header">
        <a href="/" className="logo">Inenco</a>
        <div className="header-right">
        <a className="active" href="/">Home</a>
        <a href="/users">User Profiles</a>
        <a href="/logout">Sign Out</a>
      </div>
    </div>
        <Login login={this.login} user={this.state.user} >
        <Router>
        <Home path="/" />
         <Logout path="/logout" user={this.state.user} signout={this.signOut} />
         <Users path="/users" />
         <UserPage path="/users/:username" />
         <SitePoster path="/siteposter" user={this.state.user} />
         {/* <Sites path="/articles" heading="articles" /> */}
         {/* <Site path="/article/:article_id" heading="article" user={this.state.user} />  */}
         <NotFound path="/error"/>
         <NotFound default />
        </Router>
  </Login>
  
  </div>
  <footer id="footer">
  <div id="row">
    <p id='footertext'>Created by Emma Jarvis</p>
    <br/>
          <a id='social' href="https://www.linkedin.com/in/emma-l-jarvis-mba-35090153/"><img src="https://mbtskoudsalg.com/images/linkedin-transparent-symbol-5.png" alt="linkedin" width="40px"/> </a>
  </div>
  </footer>
        </div>
      );
    }
  
    componentDidMount() {
      const user = sessionStorage.getItem('username')
      if (user) {
        this.setState({user: JSON.parse(user)})
      }
    }
  
    login = (username) => {
      api.getUser(username)
      .then(user => {
        sessionStorage.setItem("username", JSON.stringify(user))
        this.setState ({
          user
        })
      })
    }
  
    signOut = () => {
      sessionStorage.removeItem("username");
      this.setState({
        user: {}
      })
    }
  }
  
  export default App;