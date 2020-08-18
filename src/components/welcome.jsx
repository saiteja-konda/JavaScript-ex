import React, { Component } from "react";
class Welcome extends Component {
  state = {};
  render() {
    const { name, heroName } = this.props;
    return (
      <p>
        {name} is known as {heroName}
      </p>
    );
  }
}

export default Welcome;
