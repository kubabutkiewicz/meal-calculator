import React from "react";
import styled from "styled-components";
const Date = styled.h4`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 2rem;
  margin: 0;
  margin-left: 3.5rem;
`;

const Today = ({ todayDate }) => {
  return <Date>Date: {todayDate}</Date>;
};

export default Today;
