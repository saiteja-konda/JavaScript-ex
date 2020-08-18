import React, { Component } from "react";
import Message from "./message";
class UserWelcome2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  // using Element Variable
  render() {
    let message;
    if (this.state.isLoggedIn) {
      message = "welcome John";
    } else {
      message = "welcome Guest";
    }
    return (
      <div>
        <h1>{message}</h1>
      </div>
    );
  }
}

export default UserWelcome2;
