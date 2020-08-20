import React from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { Component } from 'react';
// import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import DayPicker from './DayPicker';
import moment from 'moment';
// import Popper from '@material-ui/core/Popper';
// import MenuItem from '@material-ui/core/MenuItem';
// import MenuList from '@material-ui/core/MenuList';
// this could also be written with destructuring parameters as:
// const UserPage = ({ user }) => (
// and then instead of `props.user.username` you could use `user.username`

class UserPage extends Component {
  state = {
    pickday: false,
    dayPicked: '',
  };

  componentDidMount() {
    // this.props.dispatch({
    //   type: 'FETCH_PICKUPS',
    //   payload: this.props.store.user.id,
    // });

    this.props.dispatch({
      type: 'GET_USER_PICKUPS',
      payload: { id: this.props.store.user.id },
    });
  }

  selectDay = (day) => {
    console.log(day);

    if (day !== 'null') {
      this.setState({
        dayPicked: day,
        pickday: true,
      });
    } else {
      this.setState({
        dayPicked: '',
        pickday: false,
      });
    }
  };

  setDay = (event) => {
    event.preventDefault();

    this.props.dispatch({
      type: 'SET_PICKUP_DAY',
      payload: { day: this.state.dayPicked, id: this.props.user.id },
    });
  };

  render() {
    let stringDay = '';
    let diff = '';
    if (this.props.store.pickupsReducer.length > 0) {
      const pickupDay = moment().weekday(
        this.props.store.pickupsReducer[0].daysOfWeek
      );
      stringDay = moment()
        .weekday(this.props.store.pickupsReducer[0].daysOfWeek)
        .format('llll');
      console.log(stringDay);

      let diff = '';
      let dayDiff = {};
      let nextPickupDay = {};

      if (
        moment().weekday() ==
        parseInt(this.props.store.pickupsReducer[0].daysOfWeek)
      ) {
        console.log('SCENARIO 1');
        diff = '0';
      } else if (
        moment().weekday() <
        parseInt(this.props.store.pickupsReducer[0].daysOfWeek)
      ) {
        console.log('SCENARIO 2');
        dayDiff = moment();
        nextPickupDay = moment(this.props.store.pickupsReducer.daysOfWeek).add(
          0,
          'week'
        );
        diff = dayDiff.diff(nextPickupDay, 'days');
      } else {
        console.log('SCENARIO 3');
        dayDiff = moment();
        nextPickupDay = moment(this.props.store.pickupsReducer.daysOfWeek).add(
          1,
          'week'
        );
        diff = dayDiff.diff(nextPickupDay, 'days');
      }

      console.log(diff);
    }

    return (
      <div>
        <Paper variant="outlined" square />
        <h1 id="welcome">Welcome, {this.props.store.user.username}!</h1>
        {/* <h4> No collections today</h4> */}
        <h3>Your collection day is: {this.props.store.user.pickupsReducer}</h3>
        <p>Your ID is: {this.props.store.user.id}</p>
        <LogOutButton className="log-out" />

        <Paper variant="outlined" square />

        {this.props.store.pickupsReducer.length > 0 ? (
          <div>
            <h2>Your pickup day is:</h2>
            <h4>{stringDay}</h4>
          </div>
        ) : (
          <div>
            <h2>Select Collection Day:</h2>
            <DayPicker selectDay={this.selectDay} />
            <div style={{ marginTop: '15px' }}>
              <button disabled={!this.state.pickday} onClick={this.setDay}>
                Confirm Day
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
