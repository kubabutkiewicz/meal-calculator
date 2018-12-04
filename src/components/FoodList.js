import React, { Component } from "react";
import styled from "styled-components";
class FoodList extends Component {
  render() {
    const ListItem = styled.li`
      padding: 10px 15px;
      cursor: pointer;
      margin: 5px 0;
      width: 100%;
      background-color: white;
    `;
    const List = styled.ul`
      position: absolute;

      background-color: #f2eff2;
      list-style: none;
    `;
    const { list } = this.props;
    return (
      <List>
        {list.map(item => {
          return <ListItem key={item.food.foodId}>{item.food.label}</ListItem>;
        })}
      </List>
    );
  }
}

export default FoodList;
