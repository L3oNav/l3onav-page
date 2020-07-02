import React, { Component } from 'react';
import { FaLanguage } from 'react-icons/fa';
import { connect } from 'react-redux';
import { changeLanguage, getLanguage } from '../../Redux/Actions/languages';
import { Text, Column } from './styles';
class LanguageSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			languageActive: this.props.language.name
		};
		this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
	}

	handleChangeLanguage = async () => {
		await this.props.changeLanguage(
			this.state.languageActive === 'US' ? 'ES' : 'US'
		);
		await this.props.getLanguage();
		this.setState({
			languageActive: this.props.language.name
		});
	};

	render() {
		return (
			<Column onClick={() => this.handleChangeLanguage()}>
				<FaLanguage
					size='40px'
					color='#219100'
					type='button'
				/>
				<Text>{this.state.languageActive}</Text>
			</Column>
		);
	}
}

const mapStateToProps = state => {
	return {
		language: state
	};
};

const mapDispatchToProps = {
	changeLanguage,
	getLanguage
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LanguageSelector);
