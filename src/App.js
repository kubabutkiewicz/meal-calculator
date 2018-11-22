import React, { Component } from "react";
import Navbar from "./components/Navbar";
import DailyNutritionForm from "./components/form/DailyNutritionForm";

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
        <Navbar todayDate={this.state.today} />
        <DailyNutritionForm />
      </div>
    );
  }
}

export default App;
