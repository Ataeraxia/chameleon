class Pro extends Component {
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
      <div className="Pro">
      <Frame title="Pro"/>
      <Module className="Hot-thought" size="single">
        <ModuleBody>
          <p>
            This is the hot thought.
          </p>
        </ModuleBody>
      </Module>
      <h1>Pro:</h1>
      <TextInput
          className="some-class"
          id="test2"
          labelText="Pro Thoughts"
          onClick={this.handleClick}
          onChange={this.handleChange}
          placeholder="I think that..."
        />
      <Link to={'/con'}>Next</Link>
      </div>
    );
  }
}
