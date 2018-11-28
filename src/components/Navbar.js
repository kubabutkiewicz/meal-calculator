import React, { Component } from "react";
import Today from "./Today";
import styled from "styled-components";

class Navbar extends Component {
  render() {
    const NavbarStyle = styled.nav`
      width: 100%;
      height: 10rem;
      background-color: #f2eff2;
      margin: 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 2rem;
    `;
    const NutrimentsStyle = styled.div`
      display: flex;
      justify-content: space-around;
      width: 33%;
      color: #787b7a;
    `;
    return (
      <NavbarStyle>
        <Today todayDate={this.props.todayDate} />
        <NutrimentsStyle>
          <h2>Calories: {Math.round(this.props.kcal * 100) / 100} kcal</h2>
          <h2>Fat: {Math.round(this.props.fat * 100) / 100} g</h2>
          <h2>Proteins: {Math.round(this.props.proteins * 100) / 100} g</h2>
          <h2>Carbo: {Math.round(this.props.carbo * 100) / 100} g</h2>
        </NutrimentsStyle>
      </NavbarStyle>
    );
  }
}

export default Navbar;
