import React, { Component } from 'react';
import "../App.css";
import "../Article.css";
import SingleSite from "./SingleSite";
import * as api from '../api.js'
import PropTypes from "prop-types";

class Site extends Component {
    state = {
      site: null,
    }
  
    render() {
      return (
        <div>
          {this.state.site && <SingleSite
          site={this.state.site}/>}
        </div>
      )
    }

    componentDidMount = () => {
      this.fetchSite();
    };

    fetchSite = () => {
      api.getSite(this.props.site_id).then(site => {
        this.setState({
          site })})
          .catch((err) => {
            this.props.navigate('/error', {replace: true, state: {msg: err.message}})
          })
        }
      }

Site.propTypes = {
user: PropTypes.object.isRequired
};

export default Site;