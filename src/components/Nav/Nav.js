import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';

const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/admin';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">Precycle</h2>
      </Link>
      <Link color="primary" className="nav-link" to="/search">
        {/* <input type="text" onChange="search" placeholder="Search" /> */}
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link color="primary" className="nav-link" to="/search">
              Search
            </Link>
            <Link color="primary" className="nav-link" to="/schedule">
              Schedule
            </Link>
            <Link color="primary" className="nav-link" to="/settings">
              Settings
            </Link>
            <Link color="primary" className="nav-link" to="/about">
              About
            </Link>

            <LogOutButton variant="contained" className="nav-link" disabled />
          </>
        )}
        {/* Always show this link since the about page is not protected */}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
