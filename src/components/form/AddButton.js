import React from "react";
import Button from "@material-ui/core/Button";

import AddIcon from "@material-ui/icons/Add";
const AddButton = () => {
  return (
    <Button variant="fab" color="primary">
      <AddIcon />
    </Button>
  );
};

export default AddButton;
