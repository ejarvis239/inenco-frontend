import React from "react";
import "../App.css";
import "../Article.css";
import { Link } from "@reach/router";
import PostSite from './PostSite'

const OptionPage = (props) => {
        return (
            <div id="PostArticleContainer">                
            <h1>Your Sites</h1>

            <div id="TopicsContainer">
                <div id="Topic">
                    <Link to="/sites" className="nav">
                    {" "}
                    <img src="https://i.pinimg.com/564x/4e/e8/9a/4ee89ab101a9f206e1ed6867df87dce5.jpg" alt="All Articles" width="100"  />  </Link>              
                </div>
                </div >
            {<PostSite user={props.user} />}
            </div>
        )
    }

export default OptionPage;