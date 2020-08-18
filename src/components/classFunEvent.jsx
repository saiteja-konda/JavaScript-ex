import React, { Component } from "react";
class ClassClick extends Component {
  handleClick() {
    console.log("Button Clicked from class component");
  }
  state = {};
  render() {
    return (
      <React.Fragment>
        <div>
          <button onClick={this.handleClick}>ClickMe</button>
        </div>
      </React.Fragment>
    );
  }
}

export default ClassClick;
