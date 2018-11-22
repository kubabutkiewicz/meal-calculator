import React from "react";

const Today = ({ todayDate }) => {
  const dateText = {
    fontSize: "2rem",
    margin: "0",
    color: "#787b7a"
  };
  return <h4 style={dateText}>Date: {todayDate}</h4>;
};

export default Today;
