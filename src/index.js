import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import LoginForm from "./components/form/LoginForm";
import "./App.css";

const Root = () => {
  return (
    <BrowserRouter>
      <>
        <Route path="/" exact component={LoginForm} />
        <Route path="/tracker/:trackerId" component={App} />
      </>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
