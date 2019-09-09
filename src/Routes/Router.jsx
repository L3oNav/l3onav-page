import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App.jsx";
import NotFound from "../Components/NotFound.jsx";
// import UsLang from '../Languages/us.json'
//? Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "../Reducers";

//? Store of redux
const store = createStore(Reducers, {});

export class Router extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Router;
