import React, { Component } from "react";
import Today from "./Today";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ViewMeals from "./ViewMeals";
class Navbar extends Component {
  render() {
    const NavbarStyle = styled.nav`
      width: 100%;
      height: 10rem;
      background-color: ${({ theme }) => theme.colors.white};
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    `;
    const NutrimentsStyle = styled.div`
      display: flex;
      justify-content: space-around;
      color: ${({ theme }) => theme.colors.dark};
    `;
    const ButtonStyled = styled.button`
      margin-right: 3.5rem;
      background-color: ${({ theme }) => theme.colors.light};
      padding: 1.8rem 7.5rem;
      border-radius: 3rem;
      text-decoration: none;
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.dark};
    `;
    const Nutriment = styled.h4`
      font-size: 2rem;
      font-weight: 400;
      :not(:last-child) {
        margin-right: 7.5rem;
      }
    `;
    return (
      <NavbarStyle>
        <Today todayDate={this.props.todayDate} />
        <NutrimentsStyle>
          <Nutriment>
            Calories: {Math.round(this.props.kcal * 100) / 100} kcal
          </Nutriment>
          <Nutriment>Fat: {Math.round(this.props.fat * 100) / 100} g</Nutriment>
          <Nutriment>
            Proteins: {Math.round(this.props.proteins * 100) / 100} g
          </Nutriment>
          <Nutriment>
            Carbo: {Math.round(this.props.carbo * 100) / 100} g
          </Nutriment>
        </NutrimentsStyle>
        <ButtonStyled as={Link} to={ViewMeals}>
          Go to List
        </ButtonStyled>
      </NavbarStyle>
    );
  }
}

export default Navbar;
