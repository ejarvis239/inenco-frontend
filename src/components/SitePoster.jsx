import React from "react";
import "../App.css";
import "../Article.css";
import { Link } from "@reach/router";
import SiteForm from "./SiteForm"
import PropTypes from "prop-types";

const SitePoster = (props) => {
        return (     
            <div id="PostArticleContainer">
                    <Link id="link" to="/sitePoster" className="nav">
                    {" "}
                    </Link>
                    <div id="postArticleFormContainer">
                    <SiteForm user={props.user}/>
                    </div>
            </div>

        )
}
    
SitePoster.propTypes = {
user: PropTypes.object.isRequired
};

export default SitePoster;