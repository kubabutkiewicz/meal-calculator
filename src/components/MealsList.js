import React, { Component } from "react";
import styled from "styled-components";
import MealListItem from "./MealListItem";
const List = styled.ul`
  display: block;
`;
class MealsList extends Component {
  state = {
    dayData: { ...this.props.data }
  };
  render() {
    const { data, clickedDay } = this.props;
    return (
      <List>
        {data.meals.map(meal => {
          return (
            <MealListItem
              meal={meal}
              date={data.date}
              clickedDay={clickedDay}
            />
          );
        })}
      </List>
    );
  }
}

export default MealsList;
