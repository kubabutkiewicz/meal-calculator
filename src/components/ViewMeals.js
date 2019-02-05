import React, { Component } from "react";
import DayMeals from "./DayMeals";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { theme } from "../helpers/theme";
const DaysMealList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  margin: 0 auto;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 5rem;
`;
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Montserrat";
    background-color: ${({ theme }) => theme.colors.dark};
    color: ${({ theme }) => theme.colors.white};
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }

  `;

class ViewMeals extends Component {
  state = {
    isOpen : false
  }
  openListIten = (date) => {
    this.setState({isOpen: !this.state.isOpen});
  }
  render() {
    const days = this.props.location.state.days;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div>
            <Title>Nutrition Calendar</Title>
            <DaysMealList>
              {days.map(day => (
                <DayMeals key={day.date} dayData={day} isOpen={this.state.isOpen} openListItem={this.openListIten}/>
              ))}
            </DaysMealList>
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default ViewMeals;
