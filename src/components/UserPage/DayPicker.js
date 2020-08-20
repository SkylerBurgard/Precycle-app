import React, { Component } from 'react';

class DayPicker extends Component {
  setDayCode = (event) => {
    this.props.selectDay(event.target.value);
  };

  render() {
    return (
      <select onChange={this.setDayCode}>
        <option value="null">Pick Day</option>
        <option value="0">Sunday</option>
        <option value="1">Monday</option>
        <option value="2">Tuesday</option>
        <option value="3">Wednesday</option>
        <option value="4">Thursday</option>
        <option value="5">Friday</option>
        <option value="6">Saturday</option>
      </select>
    );
  }
}

export default DayPicker;
