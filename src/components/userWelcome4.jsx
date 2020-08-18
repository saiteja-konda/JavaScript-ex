import React, { Component } from "react";
class UserWelcome4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    return (
      this.state.isLoggedIn && (
        <div>
          <h1>Welcome John</h1>
        </div>
      )
    );
  }
}

export default UserWelcome4;
