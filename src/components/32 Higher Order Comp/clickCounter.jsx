import React, { Component } from "react";
import withCounter from "./withCounter";
class ClickCounder extends Component {
  render() {
    const { count, IncrementCounter } = this.props;
    return (
      <div>
        <button onClick={IncrementCounter}> {this.props.name} Click {count}</button>
      </div>
    );
  }
}

export default withCounter(ClickCounder,5);
