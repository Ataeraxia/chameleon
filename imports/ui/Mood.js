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
                <input type="text"></input>
              </TableData>
              <TableData>
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
              </TableData>
            </TableRow>
          </TableBody>
        </Table>
        <Link to={'/automatic'}>Next</Link>
      </div>
    );
  }
}
