import React, { Component } from "react";
import InputForm from "@material-ui/core/Input";

class Input extends Component {
  render() {
    const { value } = this.props;
    const inputStyles = {
      marginBottom: "2rem"
    };
    return (
      <InputForm
        placeholder={value}
        inputProps={{
          "aria-label": "Description"
        }}
        style={inputStyles}
      />
    );
  }
}

export default Input;
