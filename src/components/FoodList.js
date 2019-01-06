import React, { Component } from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";
class FoodList extends Component {
  render() {
    const List = styled.ul`
      position: absolute;

      background-color: #f2eff2;
      list-style: none;
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
