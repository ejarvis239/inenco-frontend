import React from "react";
import "../App.css";
import { Link } from "@reach/router";
// import dateFormat from 'dateformat';
import PropTypes from "prop-types";

function List({siteList}) {
    
    return (
        <div id="TopicsContainer">    
       {siteList.reduce((acc, site) => {
            acc.push (
                <div id="TopicsContainer" key={site._id}> 
                <div id="articalTopic">
                    <Link to={`/sites/${site._id}`} className="nav">
                    {" "}
                    </Link>
                    
                    <p>Address: {site.address_houseNumber} {site.address_street}</p>
                    <p> {site.address_city}</p>
                    <p> {site.address_postcode}</p>
                    <p>Telephone: {site.address_telephone}</p>
                    <p>AMR enabled? {site.AMRenabled}</p>
                    <p>Manager: {site.manager}</p>
                    <p>Floorspace: {site.floorspace}</p>
                    <h3>Gas Meters:{site.gasMeterNumber} <br/>Electricity Meters: {site.electricityMeterNumber}</h3>
                    <p>
                <br/>         
                </p>
                </div>
                </div>
            )

         return acc;
    }, [])} </div>
    )}

List.propTypes = {
    articleList: PropTypes.array.isRequired
};

export default List;