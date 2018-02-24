import React, { Component } from 'react';

import { Module, ModuleHeader, ModuleBody, TextInput} from 'carbon-components-react';
import { Frame } from './App.js';

import { Link } from 'react-router-dom';

export default class Alt extends Component {
  constructor(props){
    super(props)
  }

  // Empty change handler
  handleChange = (e) => {

  }

  // Empty click handler
  handleClick = () => {
    
  }

  render(){
    return(
      <div className="Alt">
      <Frame title="Alt"/>
      <Module className="pro-thought" size="single">
        <ModuleHeader>
          Pro:
        </ModuleHeader>
        <ModuleBody>
          <p>
            This is the pro thought.
          </p>
        </ModuleBody>
      </Module>
      <Module className="con-thought" size="single">
        <ModuleHeader>
          Con:
        </ModuleHeader>
        <ModuleBody>
          <p>
            This is the con thought.
          </p>
        </ModuleBody>
      </Module>
      <h1>Balanced:</h1>
      <TextInput
          className="some-class"
          id="test2"
          labelText="Balanced Thoughts"
          onClick={this.handleClick}
          onChange={this.handleChange}
          placeholder="I think that..."
        />
      <Link to={'/rate'}>Next</Link>
      </div>
    );
  }
}
