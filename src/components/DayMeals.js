import React from "react";
import { checkIfNan } from "../helpers/helpers";
import styled from "styled-components";
import MealsList from "./MealsList";

const ItemStyled = styled.li`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.dark};
  border-radius: 4.9rem;
  :not(:last-child) {
    margin-bottom: 3rem;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;
const NutrimentsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const NutrimentText = styled.p`
  font-size: 1.2rem;
`;
const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.light};
  border: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 0.7rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;


class DayMeals extends React.Component {
  state = {
    clickedDay: null
  };
  dayNutriments = meals => {
    let kcal = 0;
    let proteins = 0;
    let fat = 0;
    let carbo = 0;
    meals.forEach(meal => {
      kcal += checkIfNan(meal.nutrients.ENERC_KCAL);
      proteins += checkIfNan(meal.nutrients.PROCNT);
      fat += checkIfNan(meal.nutrients.FAT);
      carbo += checkIfNan(meal.nutrients.CHOCDF);
    });
    return {
      kcal,
      proteins,
      fat,
      carbo
    };
  };
  showDetails = e => {
    if (this.state.clickedDay === e.target.parentNode.children[0].textContent) {
      this.setState({ clickedDay: null });
    } else {
      this.setState({
        clickedDay: e.target.parentNode.children[0].textContent
      });
    }
  };
  render() {
    const { dayData } = this.props;
    return (
      <ItemStyled>
        <Wrapper>
          <h3>{dayData.date}</h3>
          <NutrimentsWrapper>
            <NutrimentText>
              kcal: {this.dayNutriments(dayData.meals).kcal}{" "}
            </NutrimentText>
            <NutrimentText>
              proteins: {this.dayNutriments(dayData.meals).proteins}{" "}
            </NutrimentText>
            <NutrimentText>
              fat: {this.dayNutriments(dayData.meals).fat}
            </NutrimentText>
            <NutrimentText>
              carbo: {this.dayNutriments(dayData.meals).carbo}
            </NutrimentText>
          </NutrimentsWrapper>
          <ButtonStyled onClick={this.showDetails}>
            Details
            <i className="fas fa-angle-down" />
          </ButtonStyled>
        </Wrapper>
        <MealsList data={dayData} clickedDay={this.state.clickedDay} />
      </ItemStyled>
    );
  }
}


export default DayMeals;
