import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../Layout.jsx';
//? Redux
import { GlobalStyle } from '../GlobalStyles';
//? Components
import Home from '../Pages/Home/index';

export class Router extends Component {
	render() {
		return (
			<BrowserRouter>
				<Layout>
					<GlobalStyle />
					<Switch>
						<Route exact path='/' component={Home} />
					</Switch>
				</Layout>
			</BrowserRouter>
		);
	}
}

export default Router;
