import React, { Component } from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";
class FoodList extends Component {
  render() {
    const List = styled.ul`
      list-style: none;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 2rem;
    `;
    const { list } = this.props;
    return (
      <List>
        {list.map(item => {
          return (
            <FoodItem
              key={item.food.foodId}
              obj={item.food}
              addNutriments={this.props.addNutriments}
            />
          );
        })}
      </List>
    );
  }
}

export default FoodList;
