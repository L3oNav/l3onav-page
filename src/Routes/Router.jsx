import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App.jsx";
import NotFound from "../Components/NotFound.jsx";
//? Redux
import { Provider } from "react-redux";
import { store } from "../Redux/index";
import { GlobalStyle } from "../GlobalStyles";

export class Router extends Component {
	render() {
		return (
			<Provider store={store}>
				<GlobalStyle />
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={App} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Provider>
		);
	}
}

export default Router;
