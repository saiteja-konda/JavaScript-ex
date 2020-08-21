import React, { Component } from "react";
import InputRef from "./input";
class FocutInput extends Component {
  constructor(props) {
    super(props);
    this.compRef = React.createRef()

  }
  clickHandler = () =>{
      this.compRef.current.focusInput()
  }
  render() {
    return (
      <div>
        <InputRef ref ={this.compRef}/>
        <button onClick={this.clickHandler}>FocutInput</button>
      </div>
    );
  }
}

export default FocutInput;
