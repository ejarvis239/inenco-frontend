import React, { Component } from 'react';
import "../users.css";
import UserList from './UserList'
import * as api from '../api.js'

class Users extends Component {
    state = {
      users: [],
    }
  
    render() {
      return (
        <div>
          <UserList
          users={this.state.users}
          />
        </div>
      )
    }

    componentDidMount = () => {
      this.fetchUsers();
    };

    fetchUsers = () => {
      api.getUsers().then(users => {
        this.setState({
          users })})
    };
    }

export default Users;