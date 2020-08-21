import React, { Component } from "react";
import withCounter from "./withCounter";

class HoverCounter extends Component {
  render() {
    const { count, IncrementCounter } = this.props;
    return (
      <div>
        <h5 onMouseOver={IncrementCounter}>Hover Count {count}</h5>
      </div>
    );
  }
}

export default withCounter(HoverCounter);
