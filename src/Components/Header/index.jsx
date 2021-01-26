//? React
import React, { Component } from 'react';
import LanguageSelector from '../LanguageSelector/index';
import { Flex } from './styles';
class Header extends Component {
	render() {
		return (
			<Flex>
				<LanguageSelector />
			</Flex>
		);
	}
}

export default Header;
