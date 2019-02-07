import React, { Component } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./components/Navbar";
import DailyNutritionForm from "./components/form/DailyNutritionForm";
import FoodList from "./components/FoodList";
import { PulseLoader } from "react-spinners";
import { checkIfNan } from "./helpers/helpers";
import { theme } from "./helpers/theme";
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.dark};
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  `;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Loader = styled(PulseLoader)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin-top: 2rem;
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
  componentWillMount() {
    const storage = JSON.parse(localStorage.getItem("mealsInDays"));
    let days = [...this.state.days];
    let kcal = 0;
    let fat = 0;
    let proteins = 0;
    let carbo = 0;

    if(storage) {
    days.push(...storage);

    }
    const today = days.find(day => day.date === this.state.today);
    if (!today) {
      days.push({ date: this.state.today, meals: [] });
    } else {
      today.meals.forEach(meal => {
        kcal += checkIfNan(meal.nutrients.ENERC_KCAL);
        fat += checkIfNan(meal.nutrients.FAT);
        proteins += checkIfNan(meal.nutrients.PROCNT);
        carbo += checkIfNan(meal.nutrients.CHOCDF);
      });
    }
    this.setState({ days, kcal, fat, proteins, carbo });
  
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
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Navbar
            todayDate={this.state.today}
            kcal={this.state.kcal}
            proteins={this.state.proteins}
            fat={this.state.fat}
            carbo={this.state.carbo}
            days={this.state.days}
          />
          <Wrapper>
            <DailyNutritionForm
              onInputSubmit={this.handleSubmitInput}
              listLength={this.state.searchedFood.length}
            />
            {this.state.loading ? (
              <Loader
                sizeUnit={"px"}
                size={30}
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
        </>
      </ThemeProvider>
    );
  }
}

export default App;
