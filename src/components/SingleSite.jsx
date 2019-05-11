import React from "react";
import "../Article.css";
import "../ArticleMobile.css";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const SingleSite = props => {
    return (
            <div id="ArticleContainer">
                <p id="articleTitle">{props.article.title}</p>               
                <p id="topicItems">
                Topic: {props.article.belongs_to}
                <br/>
                <br/>
                </p>
                <p id="articleBody" >{props.article.body}</p>
                
                {/* {<Voter id={props.article._id} votes={props.article.votes}/>} */}
                      
                <p id="createdBy">
                <img id="userImage" src={props.article.created_by.avatar_url} alt="jessjelly" width="100" />
                <br/>
                
                Author: <Link to={`/users/${props.article.created_by.username}`}>
                {props.article.created_by.username}              
                </Link>             
                
                {/* <br/>Published: {dateFormat(props.article.created_at,'dddd, mmmm dS, yyyy, h:MM:ss TT')} */}
                </p>
                <div id="postCommentContainer">
                {/* {<CommentPoster articleId={props.article._id} user={props.user} addComment={props.addComment}/>} */}
                </div>

        
                <p id="Responses"><strong>Responses</strong></p>
                <div id="commentContainer">
                <p id="commentCount">
                Comments: {props.article.comments}
                </p>

                {/* {<Comments comments={props.comments} user={props.user} deleteComment={props.deleteComment} />} */}
                </div>
                <br/>
   
            </div>
    )}

    SingleSite.propTypes = {
        user: PropTypes.object.isRequired,
        article: PropTypes.object.isRequired, 
        comments: PropTypes.array.isRequired,
        addComment: PropTypes.func.isRequired, 
        deleteComment: PropTypes.func.isRequired, 
        };
        

  export default SingleSite;