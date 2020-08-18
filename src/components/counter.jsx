import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  increment() {
    /*
     passing object to setState
      this.setState({
      count: this.state.count + 1,
     }); 
     */

    //passing function to setState
    this.setState((prevState) => ({
      count: prevState.count + 5,
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.increment()}>Increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
