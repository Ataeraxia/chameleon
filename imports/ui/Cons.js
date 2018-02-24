class Con extends Component {
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
      <div className="Con">
      <Frame title="Con"/>
      <Module className="Hot-thought" size="single">
        <ModuleBody>
          <p>
            This is the hot thought.
          </p>
        </ModuleBody>
      </Module>
      <h1>Con:</h1>
      <TextInput
          className="some-class"
          id="test2"
          labelText="Con Thoughts"
          onClick={this.handleClick}
          onChange={this.handleChange}
          placeholder="I think that..."
        />
      <Link to={'/alt'}>Next</Link>
      </div>
    );
  }
}