import React from "react";
import "../Article.css";
import "../App.css";
import { Link } from '@reach/router'
import PropTypes from "prop-types";

const Logout = props => {
        
    return ( 
    <div id="logoutcontainer">
    <h1>Logged in as {props.user.username}</h1>
    { <button id="logoutbutton" onClick={() => props.signout() } > Sign out </button> }
    <Link to="/" className="nav">
    {" "}
    <h1>View your Sites</h1>
    </Link>
    </div>
    )
}

Logout.propTypes = {
    user: PropTypes.object.isRequired,
    signout: PropTypes.func.isRequired
    };

export default Logout