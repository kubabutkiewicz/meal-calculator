import React, { Component } from "react";
class ViewMeals extends Component {
  render() {
    const days = this.props.location.state.days;

    return (
      <div>
        <h1>Meal Calendar</h1>
        <ul>
          {days.map(day => (
            <li>{day.date}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ViewMeals;
