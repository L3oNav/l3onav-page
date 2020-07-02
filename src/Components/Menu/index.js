import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Links } from '../Links/index';
import { getLanguage } from '../../Redux/Actions/languages';
import { Container } from './styles';
class Menu extends Component {
	constructor(props) {
		super(props);
		this.showButtons = this.showButtons.bind(this);
	}
	componentDidMount() {
		if (!this.props.language) {
			this.props.getLanguage();
		}
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.language.name != this.props.language.name) {
			this.props.getLanguage();
		}
	}

	showButtons = () => {
		if (this.props.language) {
			return <Links Buttons={this.props.language.buttons} />;
		}
	};

	render() {
		if (this.props.language) {
			return (
				<Container>
					<div>{this.showButtons()}</div>
				</Container>
			);
		} else {
			return 'Loading...';
		}
	}
}

const mapStateToProps = state => {
	return { language: state };
};

const mapDispatchToProps = {
	getLanguage
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Menu);
