import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Paper, Box, Container, Button } from '@material-ui/core';
class SchedulePage extends Component {
  events = [
    {
      groupId: 'blueEvents', // recurrent events in this group move together
      daysOfWeek: ['1'],
      startTime: '10:45:00',
      endTime: '12:45:00',
    },
    // {
    //   groupId: 'greenEvents', // recurrent events in this group move together
    //   daysOfWeek: ['1'],
    //   startTime: '10:45:00',
    //   endTime: '12:45:00',
    // },
    // {
    //   groupId: 'greenEvents', // recurrent events in this group move together
    //   daysOfWeek: ['3'],
    //   startTime: '10:45:00',
    //   endTime: '12:45:00',
    // },
  ];

  componentDidMount() {
    // This should dispatch to the SAGA to go get the data
    const action = { type: 'GET_PICKUPS' };
    this.props.dispatch(action);
  }

  render() {
    return (
      <Container>
        <Paper square>
          <Box p={2}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={this.events}
            />
          </Box>
        </Paper>
      </Container>
    );
  }
}

export default connect(mapStoreToProps)(SchedulePage);
