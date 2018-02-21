import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// App component - represents the whole app
export default class App extends Component {

  componentDidMount(){
    }

  render() {
    return(
      <Router>
        <Root>   
          <Main>
            <Route exact={true} path="/" render={() => <Frame title="Situation"/>}/>
            <Route exact={true} path="/mood" render={() => <Frame title="Mood"/>}/>
          </Main>
        </Root>
      </Router>
    )
  }
}

function Frame(props){
  return(
    <div>
      <h1>
        {props.title}
      </h1>
      <div className="Comment-date">
        {formatDate(new Date())}
      </div>
    </div>
  );
}


function formatDate(date) {
  return date.toLocaleDateString();
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