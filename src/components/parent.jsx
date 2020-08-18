import React, { Component } from "react";
import Child from "./child";
class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parentName: "Parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    const { parentName } = this.state;
    alert(`Hello ${parentName} Component from ${childName}`);
  }
  render() {
    const { greetParent } = this;
    return <Child greetHandle={greetParent} />;
    // greetHandle is an method prop passing the Child Component
  }
}

export default Parent;
