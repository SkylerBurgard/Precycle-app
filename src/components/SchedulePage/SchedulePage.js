import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class SchedulePage extends Component {
  state = {
    heading: 'Pick up schedule:',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_SCHEDULE' });
  }

  render() {
    const scheduleDetails = this.props.store.scheduleReducer.map(
      (item, index) => {
        return (
          <li key={index}>
            {item.pickup_id} {item.day_of_week}
          </li>
        );
      }
    );
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <ul>{scheduleDetails}</ul>
      </div>
    );
  }
}
// let events = [
//   {
//     title: 'My repeating event',
//     start: '10:00', // a start time (10am in this example)
//     end: '14:00', // an end time (2pm in this example)
//     dow: [1, 4], // Repeat monday and thursday
//   },
//   console.log(events),
// ];

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
  }
}

// export default connect(mapStoreToProps)(SchedulePage);
