import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{

  constructor(props){
    console.log("constructor!!");
    super(props);
  }

  state = {
    count : 0
  }

  componentDidMount(){
    console.log("componentDidMount!!");
  }

  componentDidUpdate(){
    console.log("componentDidUpdate!!");
  }

  plus = () =>{
    this.setState(current => ({count : current.count + 1}));  
  }

  minus = () =>{
    this.setState(current => ({count : current.count -1}));
    
  }

  render() {
    console.log("render!!");
    const {count} = this.state;
    return (
      <div>
        <h4>this count is {count} </h4>
        <button onClick={this.plus}>Plus</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
}
export default App;
