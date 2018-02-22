import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { withRouter } from 'react-router';

import { NumberInput } from 'carbon-components-react';

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
      <h1>
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
  <div style={{
    display: 'flex'
  }} {...props} ></div>
)


const Sidebar = (props) => (
  <div style={{
    width: '33vw',
    height: '100vh',
    overflow: 'auto',
    background: '#eee'
  }} {...props} ></div>
)

const SidebarItem = (props) => (
  <div style={{
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    padding: '5px 10px'
  }} {...props}></div>

)


const Main = (props) => (
  <div style={{
    flex: 1,
    height: '100vh',
    overflow: 'auto'
  }} >
    <div style={{ padding: '20px' }} {...props}></div>
  </div>
)

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
        <table>
          <tr>
            <td>
              <input type="text"></input>
            </td>
            <td>
            <NumberInput
              className="some-class"
              id="tj-input"
              label="Percentage"
              onChange={this.handleChange}
              onClick={this.handleClick}
              min={0}
              max={100}
              value={50}
              step={10}
              invalidText="Number is not valid"
            />
            </td>
          </tr>
        </table>
        <Link to={'/'}>Next</Link>
      </div>
    );
  }
}
