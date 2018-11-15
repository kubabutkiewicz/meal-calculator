import React from "react";

const Today = ({ todayDate }) => {
  const dateText = {
    fontSize: "2rem"
  };
  return <h4 style={dateText}>Date: {todayDate}</h4>;
};

export default Today;
