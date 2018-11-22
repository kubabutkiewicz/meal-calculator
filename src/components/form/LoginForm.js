import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";

class LoginForm extends Component {
  goToTracker = (e, hist) => {
    e.preventDefault();
    const trackerId = this.nickname.value;
    hist.push(`/tracker/${trackerId}`);
  };

  render() {
    const FormStyled = styled.form`
      width: 30vw;
      background-color: #f2eff2;
      color: #787b7a;
      padding: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 5px;
    `;
    const InputStyled = styled.input`
      width: 70%;
      padding: 1rem;
      margin-bottom: 1rem;
      background-color: white;
      border: 0;
      border-radius: 5px;
      box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.4);
      transition: border 0.2s ease-in-out;
      :focus {
        outline: 0;
        border: 3px solid #619fd9;
      }
    `;
    const LabelStyled = styled.label`
      font-weight: 700;
      font-size: 1.6rem;
      margin-bottom: 1rem;
    `;
    const FormControlStyle = styled.div`
      width: 100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 1.2rem;
    `;
    const ButtonStyled = styled.button`
      width: 10rem;
      height: 4.2rem;
      padding: 1rem;
      margin: 0 auto;
      background-color: #e53935;
      color: white;
      font-weight: 700;
      border-radius: 5px;
      font-size: 1.5rem;
      position: relative;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :focus {
        outline: none;
      }
      ::before {
        content: "";
        width: 0;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: white;
        opacity: 0.2;
        display: block;
        transition: width 0.3s ease-in-out;
      }
      :hover::before {
        width: 100%;
      }
    `;
    return (
      <Route
        render={({ history }) => (
          <FormStyled onSubmit={e => this.goToTracker(e, history)}>
            <FormControlStyle>
              <LabelStyled htmlFor="nickname">Nickname</LabelStyled>
              <InputStyled
                placeholder="Type your nickname"
                id="nickname"
                ref={input => (this.nickname = input)}
              />
            </FormControlStyle>
            <ButtonStyled type="submit">
              Next <i className="fas fa-angle-double-right" />
            </ButtonStyled>
          </FormStyled>
        )}
      />
    );
  }
}

export default LoginForm;
