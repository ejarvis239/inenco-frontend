import React from "react";
import "../users.css";
import { Link } from '@reach/router';
import PropTypes from "prop-types";

function UserList(props) {
    
    return (
        <div id="userpage">
        <h1>USER PROFILES</h1>
        <div id="users">    
       {props.users.map(user => {
            return <div key={user._id} id="userList">
             <Link to={`/users/${user.username}`}>
             <img src={user.avatar_url} alt="Avatar" width="200"></img>
                </Link>    
            <p>{user.username}</p>
        </div>
        })}
     </div>
     </div> 
    )}

UserList.propTypes = {
    users: PropTypes.array.isRequired
  };

export default UserList;