import React, { Component } from "react";
import Title from "./Title";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      value: ""
    };
  }
  handleChange = e => {
    this.setState({ value: e.target.value });
  };
  goToTracker = e => {
    e.preventDefault();
    console.log(this);
  };
  render() {
    return (
      <form onSubmit={this.goToTracker}>
        <Title title="Nickname" />
        <input
          placeholder="Type your nickname to create new tracker"
          onChange={this.handleChange}
          value={this.value}
        />
        <button type="submit">Next</button>
      </form>
    );
  }
}

export default LoginForm;
