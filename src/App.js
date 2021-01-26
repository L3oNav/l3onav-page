import React, { Component } from 'react';
import {LangProvider} from './hooks/language';
import Router from './Routes/Router';

class App extends Component {
	render() {
		return (
			<LangProvider>
				<Router />
			</LangProvider>
		);
	}
}


export default App;
