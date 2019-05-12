import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import List from "./List";
import * as api from '../api.js'
import Nav from "./Nav.jsx";

class Sites extends Component {
    state = {
      sites: [],
    }
    render() {
      return (
        <div>
          <Nav />
          <List
          siteList={this.state.sites} 
          />
        </div>
      )
    }
    componentDidMount = () => {
      this.fetchSites();
    };

    // componentDidUpdate = (prevProps) => {
    //   if (prevProps. !== this.props.) {
    //     this.fetchSites();
    //   }
    // }

    fetchSites = () => {
      api.getSites().then(sites => {
        this.setState({
          sites })})
    };
    }

export default Sites;