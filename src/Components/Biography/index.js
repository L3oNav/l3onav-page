import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getLanguage } from '../../Redux/Actions/languages';
import SocialLinks from '../SocialLinks/index';
import { Container, TextContainer } from './styles';

class Biography extends Component {
	async componentDidMount() {
		if (!this.props.language) await this.props.getLanguage();
	}

	render() {
		if (this.props.language) {
			return (
				<Container>
					<TextContainer>
						<div>{this.props.language.title}</div>
						<div>{this.props.language.biography}</div>
					</TextContainer>
					<SocialLinks />
				</Container>
			);
		} else {
			return 'Loading...';
		}
	}
}

const mapStateToProps = state => {
	return {
		language: state
	};
};

const mapDispatchToProps = {
	getLanguage
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Biography);
