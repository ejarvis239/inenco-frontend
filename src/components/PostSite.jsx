import React from "react";
import "../App.css";
import "../Article.css";
import { Link } from "@reach/router";

const PostSite = () => {
        return (     
            <div id="PostArticleContainer">
                    <h1>Add Site</h1>
                    <Link id="link" to="/siteposter" className="nav">
                    {" "}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1lkhhNO1oY08mEjIvbf_GWSiiHaSQM78krFFAMDOOJwb8nPYh3Q" alt="add post" width="100"/>    
                    </Link>
            </div>

        )
    }

export default PostSite;