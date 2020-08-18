import React, { Component } from "react";
class Message extends Component {
  state = {
    message: "Welcome visitor ",
  };
  changeMessage() {
    this.setState({
      message: "Thank you for subscribing",
    });
  }
  render() {
    return (
      <React.Fragment>
        <p>{this.state.message}</p>
        <button onClick={() => this.changeMessage()}>subscribe</button>
      </React.Fragment>
    );
  }
}

export default Message;
