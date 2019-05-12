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

            <div class = "col-9-md-3"></div>
            <div class = "col-md-9"><h1>Add Your Site</h1></div>
          <br />

    <div class="container myform">
        <div class="row" >
            <div class = "col-md-4"> House number:</div>
            <div class = "col-md-8" id="App"><input
                name="address_houseNumber"
                id="title"
                placeholder=""
                onChange={this.handleChange}
                size = "100" required
              /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> Street</div>
            <div class = "col-md-8" id="App"><input
                name="street"
                id="title"
                placeholder=""
                onChange={this.handleChange2}
                size = "50" required
            /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> City:</div>
            <div class = "col-md-8" id="App"><input
                name="city"
                id="title"
                placeholder=""
                onChange={this.handleChange3}
                size = "50" required
            /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> Postcode:</div>
            <div class = "col-md-8" id="App"><input
                name="postcode"
                id="title"
                placeholder=""
                onChange={this.handleChange4}
                size = "50" required
            /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> Telephone:</div>
            <div class = "col-md-8" id="App"><input
                name="telephone"
                id="title"
                placeholder=""
                onChange={this.handleChange5}
                size = "50" required
            /></div>
            <br /><br /><br />
      </div>

      <div class="row">
            <div class = "col-md-4"> Manager:</div>
            <div class = "col-md-8" id="App"><input
                name="manager"
                id="title"
                placeholder=""
                onChange={this.handleChange7}
                size = "50" required
            /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> Floorspace:</div>
            <div class = "col-md-8" id="App"><input
                name="floorspace"
                id="title"
                placeholder=""
                onChange={this.handleChange8}
                size = "50" required
            /></div>
             <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> AMR enabled (yes or no):</div>
            <div class = "col-md-8" id="App"><input
                name="AMRenabled"
                id="title"
                placeholder=""
                onChange={this.handleChange6}
                size = "50" required
              /></div>
            <br /><br /><br />
    </div>

      <div class="row">
            <div class = "col-md-4"> Gas meter number:</div>
            <div class = "col-md-8" id="App"><input
                name="gas meter"
                id="title"
                placeholder=""
                onChange={this.handleChange9}
                size = "50" required
              /></div>
          <br /><br /><br />
      </div>

      <div class="row">
            <div class = "col-md-4"> Electricity meter number:</div>
            <div class = "col-md-8" id="App"><input
                name="electricity meter number"
                id="title"
                placeholder=""
                onChange={this.handleChange10}
                size = "50" required
            /></div>
            <br /><br /><br /></div>
      </div>

      <br /><br />

        <div className="row">
            <div class = "col-md-4 submit" id="App"> </div>
            <div class = "col-md-6 submit"><input type="submit"
                   value="Submit"/>
            </div>
            {/*<div class = "col-md-2 submit"> </div>*/}
                <br />
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