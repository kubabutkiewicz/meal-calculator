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
      align-items: center;
      padding: 0 2rem;§
    `;

    return (
      <NavbarStyle>
        <Today todayDate={this.props.todayDate} />
      </NavbarStyle>
    );
  }
}

export default Navbar;
