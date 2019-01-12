import React, { Component } from "react";
import styled from "styled-components";

class DailyNutritionForm extends Component {
  onChangeInput = e => {
    this.props.onInputSubmit(this.mealSearched.value, e);
  };
  render() {
    const FormStyled = styled.form`
      margin-top: 5rem;
      width: 70rem;
      height: 10rem;
      border-radius: 4.9rem;
      background-color: ${({ theme }) => theme.colors.white};
      display: flex;
      justify-content: space-between;
      transition: box-shadow 0.2s ease-in-out;
    `;

    const InputStyled = styled.input`
      border: 0;
      font-size: 3.6rem;
      font-weight: 700;
      border-radius: 4.9rem;
      padding-left: 5rem;
      color: ${({ theme }) => theme.colors.dark};

      :focus {
        outline: none;
      }
      ::placeholder {
        color: ${({ theme }) => theme.colors.dark};
      }
    `;
    const ButtonStyled = styled.button`
      background-color: ${({ theme }) => theme.colors.light};
      color: ${({ theme }) => theme.colors.dark};
      cursor: pointer;
      border-radius: 4.9rem;
      border: 0;
      font-size: 3.6rem;
      padding: 1rem;
      width: 13rem;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    `;
    const Icon = styled.i`
      color: ${({ theme }) => theme.colors.dark};

      font-size: 3.6rem;
    `;
    return (
      <FormStyled
        onSubmit={this.onChangeInput}
        listLength={this.props.listLength}
      >
        <InputStyled
          type="text"
          placeholder="Search your meal"
          id="meal"
          ref={input => (this.mealSearched = input)}
        />

        <ButtonStyled>
          <Icon className="fas fa-search" />
        </ButtonStyled>
      </FormStyled>
    );
  }
}

export default DailyNutritionForm;
