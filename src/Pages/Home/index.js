import React, { Component } from 'react';
import { InfoUser } from '../../Components/InfoUser/index';
import { connect } from 'react-redux';
import { getLanguage } from '../../Redux/Actions/languages';
import Biography from '../../Components/Biography/index';
//import Certificates from '../../Components/Certificates';

class Home extends Component {

	async componentDidMount() {
		if (!this.props.language) {
			await this.props.getLanguage();
		}
	}
	render() {
		if (this.props.language) {
			return (
				<div>
					<InfoUser job={this.props.language.job} />
					<Biography />
					{/*<Certificates />*/}
				</div>
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
)(Home);
