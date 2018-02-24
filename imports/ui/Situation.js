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
        <div className="Comment-date">
          {formatDate(new Date())}
        </div>
        <textarea autoFocus={true}></textarea>
        <Link to={'/mood'}>Next</Link>
      </div>
    );
  }
}