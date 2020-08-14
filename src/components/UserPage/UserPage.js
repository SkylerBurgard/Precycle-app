import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';

// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`
const UserPage = ({ user }) => (
  <div>
    <h1 id="welcome">Welcome, {user.username}!</h1>
    <h4> No collections today</h4>
    <h3>Your collection day is: {user.groupId}</h3>
    <p>Your ID is: {user.id}</p>
    <LogOutButton className="log-in" />
  </div>
);

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
