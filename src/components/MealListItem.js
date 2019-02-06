import React, { Component } from "react";
import { checkIfNan } from "../helpers/helpers";
import styled from "styled-components";
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  height: ${({ open }) => (open ? "auto" : 0)};
`;
class MealListItem extends Component {
  render() {
    const { meal, date, clickedDay } = this.props;
    const open = date === clickedDay ? true : false;
    console.log(clickedDay, date);
    return (
      <Item open={open}>
        <p>Meal {meal.label}</p>
        <p>kcal: {checkIfNan(meal.nutrients.ENERC_KCAL)}</p>
        <p>proteins: {checkIfNan(meal.nutrients.PROCNT)}</p>
        <p>fat: {checkIfNan(meal.nutrients.FAT)}</p>
        <p>carbo: {checkIfNan(meal.nutrients.CHOCDF)}</p>
      </Item>
    );
  }
}

export default MealListItem;
