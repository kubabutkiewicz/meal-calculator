import React from "react";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";

const AddButton = () => {
  const styleIcon = {
    marginLeft: "1.5rem"
  };
  const textStyle = {
    fontSize: "1.3rem"
  };
  return (
    <Button variant="contained" color="primary" style={textStyle}>
      Next
      <Icon style={styleIcon}>send</Icon>
    </Button>
  );
};

export default AddButton;
