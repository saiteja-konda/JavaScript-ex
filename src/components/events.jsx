import React, { Component } from "react";
class Events extends Component {
  state = {
    message: "No event is rised",
  };
  constructor(props) {
    super(props);
    this.eventHandler3 = this.eventHandler3.bind(this);
  }
  eventHandler1() {
    this.setState({
      message: "Event is raised from Binding",
    });
  }
  eventHandler2() {
    this.setState({
      message: "Event is raised from Arrow function",
    });
  }
  eventHandler3() {
    this.setState({
      message: "Event is raised from Constructor",
    });
  }
  eventHandler4 = () => {
    this.setState({
      message: "Event is raised from Class property",
    });
  };
  render() {
    return (
      <React.Fragment>
        <div>
          <h3>{this.state.message}</h3>
          <button onClick={this.eventHandler1.bind(this)}>Bind</button>
          <button onClick={() => this.eventHandler2()}>arrow</button>
          <button onClick={this.eventHandler3}>con</button>
          <button onClick={this.eventHandler4}>class</button>
        </div>
      </React.Fragment>
    );
  }
}

export default Events;
