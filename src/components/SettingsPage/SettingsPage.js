import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'
const customStyles = (theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      textAlign: 'left',
      margin: `0 0 30px`,
    },
    title: {
      flexGrow: 2,
    },
    primaryHdg: {
      display: 'inline-block',
      marginRight: '0.8rem',
    },
  });

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
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <Paper variant="outlined" square />
        <h1>Settings</h1>
        <h3>Update pick up information</h3>
        <h4>Address</h4>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            onChange={this.onFormChange('address')}
            placeholder="Enter Address"
          />
          <h4>City & State</h4>
          <input
            type="text"
            onChange={this.onFormChange('city & state')}
            placeholder="Enter City & State"
          />
          <h4>Pick up Day</h4>
          <input
            type="text"
            onChange={this.onFormChange('Pick up day')}
            placeholder="Day of Week"
          />
          <Button variant="contained">Submit</Button>
        </form>
        <Paper variant="outlined" square />
      </div>
    );
  }
}

export default withStyles(customStyles)(SettingsPage);
