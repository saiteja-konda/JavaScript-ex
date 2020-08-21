import React, { Component, PureComponent } from "react";
import RegComp from "./regComp";
import PureComp from "./pureComp";

class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Saiteja",
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Saiteja",
      });
    }, 2000);
  }

  render() {
    console.log(
      "**** Parent component ****"
    );
    return (
      <div>
         Parent Component
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
