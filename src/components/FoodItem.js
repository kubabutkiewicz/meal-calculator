import React from "react";

const FoodItem = ({ obj, addNutriments }) => {
  const handleClick = () => {
    addNutriments(
      obj.nutrients.ENERC_KCAL,
      obj.nutrients.PROCNT,
      obj.nutrients.FAT,
      obj.nutrients.CHOCDF
    );
  };
  return (
    <>
      <h2>Label: {obj.label}</h2>
      <h2>kcal: {obj.nutrients.ENERC_KCAL}</h2>
      <h2>protein: {obj.nutrients.PROCNT}</h2>
      <h2>fat: {obj.nutrients.FAT}</h2>
      <h2>carbo: {obj.nutrients.CHOCDF}</h2>
      <button onClick={() => handleClick()}>Add to daily nutrition</button>
    </>
  );
};

export default FoodItem;
