import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import SingleSite from "./SingleSite";
import * as api from '../api.js'
import PropTypes from "prop-types";

class Site extends Component {
    state = {
      article: null,
    }
  
    render() {
      return (
        <div>
          {this.state.article && this.state.comments && <SingleSite
          article={this.state.article} manager={this.state.article}
          />}
        </div>
      )
    }

    componentDidMount = () => {
      this.fetchArticle();
    };

    fetchArticle = () => {
      api.getSite(this.props.article_id).then(article => {
        this.setState({
          article })})
          .catch((err) => {
            this.props.navigate('/error', {replace: true, state: {msg: err.message}})
          })
        }
      }

Site.propTypes = {
user: PropTypes.object.isRequired
};

export default Site;