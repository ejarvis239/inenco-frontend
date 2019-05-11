import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import List from "./List";
// import * as api from '../api.js'
import Nav from "./Nav.jsx";

class Sites extends Component {
    state = {
      articles: [],
    }
  
    render() {
      return (
        <div>
          <Nav />
          
          <List
          articleList={this.state.articles} 
          />
        </div>
      )
    }

    componentDidMount = () => {
      this.fetchArticles();
    };

    componentDidUpdate = (prevProps) => {
      if (prevProps.topic !== this.props.topic) {
        this.fetchArticles();
      }
    }

    // fetchArticles = () => {
    //   api.getArticles(this.props.topic).then(articles => {
    //     this.setState({
    //       articles })})
    // };
    }

export default Sites;