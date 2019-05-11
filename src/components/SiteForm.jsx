import React, { Component } from "react";
import "../postarticle.css";
import * as api from "../api";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

class SiteForm extends Component {
  state = {
    address_houseNumber: "",
    address_street: "",
    address_city: "",
    address_postcode: "",
    address_telephone: "",
    manager: "",
    floorspace:"",
    AMRenabled: "",
    gasMeter: "",
    electricityMeter: "",
  };
  render() {
    return this.state.ArticleAdded ? (
      <div>
      <h1>Your site has been added!</h1>
      <Link to="/" className="nav">
      {" "}
      <h1>Go to Sites</h1>
      </Link>
      </div>
    ) : (
      <div id="postArticleFormContainer">
        <form onSubmit={this.handleSubmit}>
        <h1>Add Site</h1>
        <div id="App">
              <input 
                name="address_houseNumber"
                id="title"
                placeholder="House Number"
                onChange={this.handleChange}
                required
              />
          </div>
          <div id="App">
              <input 
                name="street"
                id="title"
                placeholder="Street"
                onChange={this.handleChange2}
                required
              />
          </div>
          <div id="App">
              <input 
                name="city"
                id="title"
                placeholder="City"
                onChange={this.handleChange3}
                required
              />
          </div>
          <div id="App">
              <input 
                name="postcode"
                id="title"
                placeholder="Postcode"
                onChange={this.handleChange4}
                required
              />
          </div>
          <div id="App">
              <input 
                name="telephone"
                id="title"
                placeholder="Telephone"
                onChange={this.handleChange5}
                required
              />
          </div>
          <div id="App">
              <input 
                name="manager"
                id="title"
                placeholder="Manager"
                onChange={this.handleChange7}
                required
              />
          </div>
          <div id="App">
              <input 
                name="floorspace"
                id="title"
                placeholder="Floorspace"
                onChange={this.handleChange8}
                required
              />
          </div>
          <div id="App">
          <div id="App">
              <input 
                name="AMRenabled"
                id="title"
                placeholder="AMR enabled (yes or no)"
                onChange={this.handleChange6}
                required
              />
          </div>
          <div id="App">
              <div id="App">
              <input 
                name="gas meter"
                id="title"
                placeholder="Gas meter number"
                onChange={this.handleChange9}
                required
              />
          </div>
          <div id="App">
              <input 
                name="electricity meter number"
                id="title"
                placeholder="Electricity meter number"
                onChange={this.handleChange10}
                required
              />
          </div>
            </div>
          </div>
          <br />
          <div id="App">
          <div id="App">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    );
  }
  handleChange = event => {
    const value = event.target.value;
    this.setState({
      address_houseNumber: value
    });
  };
  handleChange2 = event => {
    const value2 = event.target.value;
    this.setState({
      address_street: value2
    });
  };
  handleChange3 = event => {
    const value3 = event.target.value;
    this.setState({
      address_city: value3
    });
  };
  handleChange4 = event => {
    const value4 = event.target.value;
    this.setState({
      address_postcode: value4
    });
  };
  handleChange5 = event => {
    const value5 = event.target.value;
    this.setState({
      address_telephone: value5
    });
  };
  handleChange6 = event => {
    const value6 = event.target.value;
    this.setState({
      AMRenabled: value6
    });
  };
  handleChange7 = event => {
    const value7 = event.target.value;
    this.setState({
      manager: value7
    });
  };
  handleChange8 = event => {
    const value8 = event.target.value;
    this.setState({
      floorspace: value8
    });
  };
  handleChange9 = event => {
    const value9 = event.target.value;
    this.setState({
      gasMeter: value9
    });
  };
  handleChange10 = event => {
    const value10 = event.target.value;
    this.setState({
      electricityMeter: value10
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.addSite(
      this.state.address_houseNumber,
      this.state.address_street,
      this.state.address_city,
      this.state.address_postcode,
      this.state.address_telephone,
      this.state.manager,
      this.state.floorspace,
      this.state.AMRenabled,
      this.state.gasMeter,
      this.state.electricityMeter,
      this.props.user._id,
    );
    this.setState({
      ArticleAdded: true
    });
  };

addSite = (address_houseNumber, address_street, address_city, address_postcode, address_telephone, manager, floorspace, AMRenabled, gasMeterNumber, electricityMeterNumber, id) => {
  console.log(id)
  api.addSite(address_houseNumber, address_street, address_city, address_postcode, address_telephone, manager, floorspace, AMRenabled, gasMeterNumber, electricityMeterNumber, id);
};
}

SiteForm.propTypes = {
  user: PropTypes.object.isRequired
};

export default SiteForm;