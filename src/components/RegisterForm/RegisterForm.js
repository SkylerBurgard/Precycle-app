import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import StateDropdown from './StateDropdown';

class RegisterForm extends Component {
  state = {
    username: '',
    password: '',
    firstname: '',
    lastname: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch({
      type: 'REGISTER',
      payload: {
        username: this.state.username,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zip: this.state.zip,
      },
    });
  }; // end registerUser

  handleInputChangeFor = (propertyName) => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  };

  handleStateCodeChange = (stateCode) => {
    this.setState({
      state: stateCode,
    });
  };

  render() {
    return (
      <form className="formPanel" onSubmit={this.registerUser}>
        <h2>Register User</h2>
        {this.props.errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {this.props.errors.registrationMessage}
          </h3>
        )}
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              required
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              required
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="firstname">
            First Name:
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              required
              onChange={this.handleInputChangeFor('firstname')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            Last Name:
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              required
              onChange={this.handleInputChangeFor('lastname')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="address">
            Street Address:
            <input
              type="text"
              name="address"
              value={this.state.address}
              required
              onChange={this.handleInputChangeFor('address')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="city">
            City:
            <input
              type="text"
              name="city"
              value={this.state.city}
              required
              onChange={this.handleInputChangeFor('city')}
            />
          </label>
        </div>

        <div>
          <label htmlFor="state">
            State:
            <StateDropdown handleStateCodeChange={this.handleStateCodeChange} />
          </label>
        </div>
        <div>
          <label htmlFor="zip">
            Zip:
            <input
              type="text"
              name="zip"
              value={this.state.zip}
              required
              onChange={this.handleInputChangeFor('zip')}
            />
          </label>
        </div>
        <div>
          <input
            className="register"
            type="submit"
            name="submit"
            value="Register"
          />
        </div>
      </form>
    );
  }
}

export default connect(mapStoreToProps)(RegisterForm);
