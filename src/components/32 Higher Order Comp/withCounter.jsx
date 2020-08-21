import React from "react";
const withCounter = (WrappedComponent) => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };

    IncrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + 1,
      }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          IncrementCounter={this.IncrementCounter}
        />
      );
    }
  }
  return WithCounter;
};
export default withCounter;
