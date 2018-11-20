import React, { Component } from "react";
import Today from "./components/Today";

class App extends Component {
  constructor() {
    super();
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    this.state = {
      today: `${dd}-${mm}-${yyyy}`
    };
  }
  render() {
    return (
      <div className="App">
        <Today todayDate={this.state.today} />
      </div>
    );
  }
}

export default App;
