import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    );
  }
}
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
            {item.first_name} {item.last_name}
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

// export default connect(mapStoreToProps)(SchedulePage);
