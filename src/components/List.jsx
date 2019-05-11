import React from "react";
import "../App.css";
import { Link } from "@reach/router";
// import dateFormat from 'dateformat';
import PropTypes from "prop-types";

function List({articleList}) {
    const imageLinks = {
        coding: 'https://i.pinimg.com/564x/be/dd/ef/beddef99d59666201ae293bcc362ec97.jpg',
        football: 'https://i.pinimg.com/564x/9a/07/ab/9a07ab814238e792d99daba3a093b005.jpg',
        cooking: 'https://i.pinimg.com/564x/c2/eb/eb/c2ebeb96f22ff99135eef8e4c24bb730.jpg'
    }
    
    return (
        <div id="TopicsContainer">    
       {articleList.reduce((acc, article) => {
            acc.push (
                <div id="TopicsContainer" key={article._id}> 
                <div id="articalTopic">
                    <Link to={`/article/${article._id}`} className="nav">
                    {" "}
                    <img src={imageLinks[article.belongs_to]} alt="{article.belongs_to}" width="70" height="70" />
                    </Link>
                    <h3>{article.title}</h3>
                    <p>{article.body.slice(0, 100)}....</p>
                    <p>Votes: {article.votes}</p>
                    <p>
                <img id="userImage" src={article.created_by.avatar_url} alt="jessjelly" width="40" />
                <br/>
                
                Author: <Link to={`/users/${article.created_by.username}`}>
                {article.created_by.username}              
                </Link>             
                
                {/* <br/>Published: {dateFormat(article.created_at,'dddd mmmm dS yyyy h:MM:ss TT')} */}
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