import React, { Component } from 'react';
import { connect } from 'react-redux';
// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
class SettingsPage extends Component {
  state = {
    firstName: '',
    lastName: '',
  };

  onFormChange = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  onSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({ type: 'POST_NAME', payload: this.state });
  };
  render() {
    return (
      <div>
        <h1>Settings</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onFormChange('firstName')}
            placeholder="Please enter First Name"
          />
          <input
            type="text"
            onChange={this.onFormChange('lastName')}
            placeholder="Please enter Last Name"
          />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(SettingsPage);
