import React from "react";
const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    state = {
      count: 0,
    };

    IncrementCounter = () => {
      this.setState((prevState) => ({
        count: prevState.count + incrementNumber,
      }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          IncrementCounter={this.IncrementCounter}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};
export default withCounter;
