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
      today: `${dd}-${mm}-${yyyy}`,
      searchedFood: {},
      kcal: 0,
      proteins: 0,
      fat: 0,
      carbo: 0
    };
  }
  handleSubmitInput = (input, e) => {
    e.preventDefault();
    const searchedMeal = input;
    fetch(
      `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${searchedMeal}&app_id=fae82e2e&app_key=5928a956a8a6a6f9262faa41de98b3f4`
    )
      .then(data => data.json())
      .then(response => {
        this.setState({ searchedFood: response.hints[0].food });
        this.setState({
          kcal: this.state.kcal + this.state.searchedFood.nutrients.ENERC_KCAL
        });
        this.setState({
          fat: this.state.fat + this.state.searchedFood.nutrients.FAT
        });
        this.setState({
          proteins:
            this.state.proteins + this.state.searchedFood.nutrients.PROCNT
        });
        this.setState({
          carbo: this.state.carbo + this.state.searchedFood.nutrients.CHOCDF
        });
      });
  };

  render() {
    return (
      <div className="App">
        <Navbar
          todayDate={this.state.today}
          kcal={this.state.kcal}
          proteins={this.state.proteins}
          fat={this.state.fat}
          carbo={this.state.carbo}
        />
        <DailyNutritionForm onInputSubmit={this.handleSubmitInput} />
      </div>
    );
  }
}

export default App;
