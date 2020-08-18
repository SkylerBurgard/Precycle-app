import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Component } from 'react';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'FETCH_ADDRESS',
      payload: this.props.store.user.id,
    });
  }
  render() {
    return (
      <div>
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {/* <h4> No collections today</h4> */}
        <h3>Your collection day is: {this.props.store.user.pickup_id}</h3>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-out" />
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
