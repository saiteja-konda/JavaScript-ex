import React, { Component } from "react";
import FRinput from "./FRinput";
class ParentInput extends Component {
  constructor(props) {
    super(props);
    this.InputRef = React.createRef();
  }

  clickHandler = () => {
    this.InputRef.current.focus();
  }
  render() {
    return (
      <div>
        <FRinput ref={this.InputRef} />
        <button onClick={this.clickHandler}>FocutInput</button>
      </div>
    );
  }
}

export default ParentInput;
