import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Frame } from './App.js';

// Situation component - represents a single situation
export class Situation extends Component {
  render() {
    return (
      <div className="Situation">
        <Frame title="Situation"/>
        <button className="Next" onClick={this.props.history.push("/mood")}>
          Next
        </button>
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}