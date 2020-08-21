import React, { Component } from "react";
class Refs extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }
  clickHandler = () => {
    alert(this.inputRef.current.value);
  };
  render() {
    return (
      <div>
        <label>Text</label>
        <input type="text" ref={this.inputRef} placeholder="enter text"></input>
        <button onClick={this.clickHandler}>Click me </button>
        <input type="text" ref={this.setCbRef}></input>
      </div>
    );
  }
}

export default Refs;
