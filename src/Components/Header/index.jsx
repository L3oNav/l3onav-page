//? React
import React, { Component } from 'react';
import Menu from '../Menu/index';
import LanguageSelector from '../LanguageSelector/index';
import { Flex } from './styles';
class Header extends Component {
	render() {
		return (
			<Flex>
				<LanguageSelector />
				<Menu />
			</Flex>
		);
	}
}

export default Header;
