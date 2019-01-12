import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router";
import App from "./App";
import ViewMeals from "./components/ViewMeals";
import * as serviceWorker from "./serviceWorker";
const Root = () => {
  return (
    <BrowserRouter>
      <>
        <Route exact path="" component={App} />
        <Route path="/view-meals" component={ViewMeals} />
      </>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
