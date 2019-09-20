import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App.jsx";
import NotFound from "../Components/NotFound.jsx";
import us from '../Languages/us.json'
//? Redux
import { Provider } from "react-redux";
import { store } from "../Redux/index";

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
