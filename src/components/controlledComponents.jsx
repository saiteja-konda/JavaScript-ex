import React, { Component } from "react";

class ControlledComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      biography: "",
      topic: "react",
    };
  }
  hangleChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  hangleChange2 = (event) => {
    this.setState({
      biography: event.target.value,
    });
  };
  hangleChange3 = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(
      ` ${this.state.username} ${this.state.biography} ${this.state.topic}`
    );
    event.preventDefault();
  };
  render() {
    const { username, biography, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <h1>hello</h1>
          <div>
            <label>Username</label>
            <input
              value={username}
              type="text"
              placeholder="Username"
              onChange={this.hangleChange}
            />
          </div>
          <div>
            <label>Biography</label>
            <textarea
              value={biography}
              type="text"
              placeholder="enter biography"
              onChange={this.hangleChange2}
            />
          </div>
          <div>
            <label>Topic</label>
            <select value={topic} onChange={this.hangleChange3}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="Vue">Vue</option>
            </select>
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
    );
  }
}

export default ControlledComponents;
