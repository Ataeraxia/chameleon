import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { withRouter } from 'react-router';

import { NumberInput, TextInput, Table, TableBody, TableHead, TableHeader, TableRow, TableData } from 'carbon-components-react';

import 'carbon-components/css/carbon-components.css';

// App component - represents the whole app
export default class App extends Component {

  componentDidMount(){
    }

  render() {
    return(
      <Router>
        <Root>   
          <Main>
            <Route exact={true} path="/" component={Situation}/>
            <Route exact={true} path="/mood" component={Mood}/>
            <Route exact={true} path="/automatic" component={Automatic}/>
          </Main>
        </Root>
      </Router>
    )
  }
}

// Contains the section title along with the current date
function Frame(props){
  return(
    <div>
      <h1 className="frame-title">
        {props.title}
      </h1>
    </div>
  );
}


function formatDate(date) {
  return date.toLocaleString();
}


class LoadFile extends Component {
  constructor(props){
    super(props)

    this.state = {
      content: null
    }
  }
  componentDidMount = () => {
    fetch(this.props.url)
      .then(res => res.text())
      .then(res => {
        this.setState({
          content: res
        })
      })
  }
  
  render() {
    const {content} = this.state
    return (
      <pre>
        <div dangerouslySetInnerHTML={{__html: content}} />
      </pre>
    )
  }
}


const Root = (props) => (
  <div className="root" {...props} ></div>
)


const Sidebar = (props) => (
  <div className="sidebar" {...props} ></div>
)

const SidebarItem = (props) => (
  <div className="sidebar-item" {...props}></div>
)


const Main = (props) => (
  <div className="main-outer">
    <div className="main-inner"{...props}></div>
  </div>
)

//Situation component
class Situation extends Component {
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

// Mood component
class Mood extends Component {
  
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {level: 0};
  }

  handleChange = (e) => {
    this.setState({level: e.value});
  }

  // Empty click handler
  handleClick = () => {
    
  }

  render(){
    const level = this.state.level;

    return(
      <div className="Mood">
        <Frame title="Mood"/>
        <Table>
          <TableBody>
            <TableRow>
              <TableData>
                Name of mood
              </TableData>
              <TableData>
                Intensity of mood (in %)
              </TableData>
            </TableRow>
            <TableRow>
              <TableData>
                <input type="text"></input>
              </TableData>
              <TableData>
              <NumberInput
                className="some-class"
                id="tj-input"
                onChange={this.handleChange}
                onClick={this.handleClick}
                min={0}
                max={100}
                value={50}
                step={5}
                invalidText="Number is not valid"
              />
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
        <Link to={'/automatic'}>Next</Link>
      </div>
    );
  }
}

// Automatic thought component
class Automatic extends Component {

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
        <Link to={'/'}>Next</Link>
      </div>
    );
  }
}