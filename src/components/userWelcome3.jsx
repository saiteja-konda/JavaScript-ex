import React, { Component } from "react";
class UserWelcome3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>
        <h1>welcome John</h1>
      </div>
    ) : (
      <div>
        <h1>welcome Guest</h1>
      </div>
    );
  }
}

export default UserWelcome3;
