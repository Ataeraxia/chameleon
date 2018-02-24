import React, { Component } from 'react';

import { TextInput} from 'carbon-components-react';
import { Frame } from './App.js';

import { Link } from 'react-router-dom';

// Automatic thought component
export default class Automatic extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {thought: ''};
  }

  handleChange = (e) => {
    this.setState({thought: e.value});
  }

  // Empty click handler
  handleClick = () => {
    
  }


  render(){
    return(
      <div className="Automatic">
        <Frame title="Automatic"/>
        <TextInput
          className="some-class"
          id="test2"
          labelText="Automatic Thought"
          onClick={this.handleClick}
          onChange={this.handleChange}
          placeholder="I think that..."
        />
        <Link to={'/pro'}>Next</Link>
      </div>
    );
  }
}

