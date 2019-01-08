import React from "react";
import styled from "styled-components";

const Item = styled.li`
  margin: 2rem;
  background-color: #f2eff2;
  padding: 2rem;
  min-width: 33%;
`;

const checkIfNan = num => {
  if (isNaN(num)) {
    num = 0;
  } else {
    num = Math.round(num * 100) / 100;
  }
  return num;
};
const FoodItem = ({ obj, addNutriments }) => {
  const handleClick = () => {
    addNutriments(
      checkIfNan(obj.nutrients.ENERC_KCAL),
      checkIfNan(obj.nutrients.PROCNT),
      checkIfNan(obj.nutrients.FAT),
      checkIfNan(obj.nutrients.CHOCDF)
    );
  };
  return (
    <Item>
      <h2>Label: {obj.label}</h2>
      <h2>kcal: {checkIfNan(obj.nutrients.ENERC_KCAL)}</h2>
      <h2>protein: {checkIfNan(obj.nutrients.PROCNT)}</h2>
      <h2>fat: {checkIfNan(obj.nutrients.FAT)}</h2>
      <h2>carbo: {checkIfNan(obj.nutrients.CHOCDF)}</h2>
      <button onClick={() => handleClick()}>Add to daily nutrition</button>
    </Item>
  );
};

export default FoodItem;
