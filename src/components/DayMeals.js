import React from "react";
import { checkIfNan } from "../helpers/helpers";
import styled from "styled-components";
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
const MealsList = styled.ul`
  display: block;
`;
const MealsListItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  height: ${({open}) => open ? "auto" : 0};
`;
const dayNutriments = meals => {
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

const DayMeals = ({ dayData , isOpen, openListItem}) => {
  return (
    <ItemStyled>
      <Wrapper>
        <h3>Date: {dayData.date}</h3>
        <NutrimentsWrapper>
          <NutrimentText>
            kcal: {dayNutriments(dayData.meals).kcal}{" "}
          </NutrimentText>
          <NutrimentText>
            proteins: {dayNutriments(dayData.meals).proteins}{" "}
          </NutrimentText>
          <NutrimentText>fat: {dayNutriments(dayData.meals).fat}</NutrimentText>
          <NutrimentText>
            carbo: {dayNutriments(dayData.meals).carbo}
          </NutrimentText>
        </NutrimentsWrapper>
        <ButtonStyled onClick={() => {
          openListItem(dayData.date)
        }}>
          Details
          <i className="fas fa-angle-down" />
        </ButtonStyled>
      </Wrapper>
      <MealsList>
        {dayData.meals.map(meal => {
          return (
            <MealsListItem open={isOpen} key={meal.id}>
              <p>Meal{meal.label}</p>
              <p>kcal: {checkIfNan(meal.nutrients.ENERC_KCAL)}</p>
              <p>proteins: {checkIfNan(meal.nutrients.PROCNT)}</p>
              <p>fat: {checkIfNan(meal.nutrients.FAT)}</p>
              <p>carbo: {checkIfNan(meal.nutrients.CHOCDF)}</p>
            </MealsListItem>
          );
        })}
      </MealsList>
    </ItemStyled>
  );
};

export default DayMeals;
