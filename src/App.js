import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar";
import DailyNutritionForm from "./components/form/DailyNutritionForm";
import FoodList from "./components/FoodList";
import { PulseLoader } from "react-spinners";
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
class App extends Component {
  constructor() {
    super();
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth() + 1; //January is 0!
    const yyyy = date.getFullYear();
    this.state = {
      today: `${dd}-${mm}-${yyyy}`,
      loading: false,
      searchedFood: [],
      kcal: 0,
      proteins: 0,
      fat: 0,
      carbo: 0,
      days: []
    };
  }
  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem("mealsInDays"));
    console.log(storage);
    let days = [...this.state.days];
    days.push(...storage);
    this.setState({ days });
  }
  handleSubmitInput = (input, e) => {
    e.preventDefault();
    const searchedMeal = input;
    this.setState({ loading: true });
    fetch(
      `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${searchedMeal}&app_id=fae82e2e&app_key=5928a956a8a6a6f9262faa41de98b3f4`
    )
      .then(data => data.json())
      .then(response => {
        this.setState({ searchedFood: [...response.hints] });
        this.setState({ loading: false });
      });
  };
  addToLocalStorage = data => {
    localStorage.setItem("mealsInDays", JSON.stringify(data));
  };
  addMealToArray = meal => {
    let days = [...this.state.days];
    const today = days.find(day => day.date === this.state.today);
    today.meals.push(meal);
    this.addToLocalStorage(this.state.days);
  };
  addNutriments = (kcal, proteins, fat, carbo) => {
    this.setState({
      kcal: this.state.kcal + kcal,
      proteins: this.state.proteins + proteins,
      fat: this.state.fat + fat,
      carbo: this.state.carbo + carbo
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
        <Wrapper>
          <DailyNutritionForm onInputSubmit={this.handleSubmitInput} />
          {this.state.loading ? (
            <PulseLoader
              sizeUnit={"px"}
              size={50}
              color={"#f2eff2"}
              loading={this.state.loading}
            />
          ) : (
            <FoodList
              list={this.state.searchedFood}
              addNutriments={this.addNutriments}
              addMealToArray={this.addMealToArray}
            />
          )}
        </Wrapper>
      </div>
    );
  }
}

export default App;
