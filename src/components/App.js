import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserRequest, createUserRequest, deleteUserRequest, userError } from '../actions/users';
import { Alert } from 'reactstrap';

import UsersList from './UsersList';
import NewUserFrom from './NewUserForm';

class App extends Component {

  constructor(props) {
    super(props);

    this.props.getUserRequest();
  }

  handleSubmit = ({firstName, lastName}) => {
    this.props.createUserRequest({
      firstName, lastName
    });
  };

  onDeleteUserClick = (userId) => {
    this.props.deleteUserRequest(userId);
  };

  handleCloseAlert = () => {
    this.props.userError({
      error: ''
    });
  };

  render() {
    const users = this.props.users;
    return (
      <div style={{ margin: '0 auto', padding: '20px', maxWidth: '600px'}}>

        <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
          { this.props.users.error }
        </Alert>

        <NewUserFrom onSubmit={this.handleSubmit} />
        <UsersList users={users.items} onDeleteUser={this.onDeleteUserClick} />
      </div>
    );
  }
}

export default connect(({users}) => ({users}), {
  getUserRequest, createUserRequest, deleteUserRequest, userError
})(App);
