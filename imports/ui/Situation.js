import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

// Situation component - represents a single situation
export default class Situation extends Component {

  render() {
    return (
      <div className="Situation">
        <h1>Situation</h1>
        <div className="Comment-date">
            {formatDate(new Date())}
        </div>
        <button className="Next">
        </button>
      </div>
    );
  }
}

function formatDate(date) {
  return date.toLocaleDateString();
}
