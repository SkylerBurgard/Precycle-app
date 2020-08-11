import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class NamePage extends Component {
  state = {
    heading: 'List of Names',
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_NAME' });
  }

  render() {
    const listOfNames = this.props.store.nameReducer.map((item, index) => {
      return (
        <li key={index}>
          {item.first_name} {item.last_name}
        </li>
      );
    });
    return (
      <div>
        <h2>{this.state.heading}</h2>
        <ul>{listOfNames}</ul>
      </div>
    );
  }
}

export default connect(mapStoreToProps)(NamePage);
