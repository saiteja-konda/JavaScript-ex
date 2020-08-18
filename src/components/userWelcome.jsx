import React, { Component } from "react";
class UserWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  //Conditional rendring using If and else
  render() {
    if (this.state.isLoggedIn) {
      return (
        <div>
          <h1>Welcome John</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Welcome guest</h1>
        </div>
      );
    }
  }
}

export default UserWelcome;
