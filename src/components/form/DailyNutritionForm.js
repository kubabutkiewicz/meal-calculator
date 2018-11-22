import React, { Component } from "react";
import styled from "styled-components";

class DailyNutritionForm extends Component {
  mealSearch = e => {
    e.preventDefault();
    const searchedMeal = this.mealSearched.value;
    fetch(
      `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${searchedMeal}&app_id=${
        process.env.REACT_APP_ID
      }&app_key=${process.env.REACT_APP_KEY}`
    )
      .then(data => data.json())
      .then(response => console.log(response));
  };
  render() {
    const FormStyled = styled.form`
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 30%;
      background-color: #f2eff2;
      padding: 3rem 5rem;
      margin-left: 2rem;
      width: 20vw;
    `;
    const FormControlStyled = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
    `;
    const LabelStyled = styled.label`
      font-size: 3rem;
      font-weight: 700;
      color: #787b7a;
      margin-bottom: 1.1rem;
    `;
    const InputStyled = styled.input`
      padding: 1.2rem;
      border: 0;
      border-radius: 5px;
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
      margin-bottom: 1rem;
      transition: border 0.2s ease-in-out;
      :focus {
        outline: none;
        border: 3px solid #619fd9;
      }
    `;
    const ButtonStyled = styled.button`
      background-color: #e53935;
      color: white;
      cursor: pointer;
      font-weight: 700;
      display: flex;
      justify-content: space-around;
      border-radius: 5px;
      font-size: 1.5rem;
      align-items: center;
      padding: 1rem;
      width: 70%;
      position: relative;
      :focus {
        outline: none;
      }
      ::before {
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        opacity: 0.2;
        display: block;
        transition: width 0.3s ease-in-out;
      }
      :hover::before {
        width: 100%;
      }
    `;
    return (
      <FormStyled onSubmit={e => this.mealSearch(e)}>
        <FormControlStyled>
          <LabelStyled htmlFor="meal">Meal</LabelStyled>
          <InputStyled
            type="text"
            placeholder="Search your meal"
            id="meal"
            ref={input => (this.mealSearched = input)}
          />
        </FormControlStyled>
        <ButtonStyled>
          Search <i className="fas fa-search" />
        </ButtonStyled>
      </FormStyled>
    );
  }
}

export default DailyNutritionForm;
