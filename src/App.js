import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './Routes/Router';
import { store } from './Redux/index';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router />
			</Provider>
		);
	}
}


export default App;
