import React, { Component } from "react";
import { connect } from "react-redux";
import { MdLanguage } from 'react-icons/md'
import {LangSelectorContainer, Button} from './styles'
import {
	changeLanguage,
	getLanguages,
	getLanguage,
} from "../../Redux/actions/index";

class LangSelector extends Component {
	constructor(props) {
		super(props);
		this.state = {
			BtnActiveLang: false,
			ActiveLanguage: "us",
		};
		this.handleClickLangIcon = this.handleClickLangIcon.bind(this);
		this.handleclickUpdateLanguage = this.handleclickUpdateLanguage.bind(this);
	}
	handleClickLangIcon() {
		this.setState((state) => ({
			BtnActiveLang: !state.BtnActiveLang,
		}));
	};
	componentDidMount() {
		if (!this.props.languages) {
			this.props.getLanguages();
			this.props.getLanguage();
		}
	}
	handleclickUpdateLanguage(name, lang) {
		if (name === "Es") {
			this.props.changeLanguage(lang);
		}
		if (name === "Us") {
			this.props.changeLanguage(lang);
		}
	}
	render() {
		const { languages } = this.props;
		return (
			<LangSelectorContainer>
				<MdLanguage
					size="35px"
					color="#219100"
					type='button'
					onClick={this.handleClickLangIcon}
				/>
				<div>
					{this.state.BtnActiveLang
						? languages.map((lang) => (
								<Button
									className='btn-EsUs'
									onClick={() => this.handleclickUpdateLanguage(lang.name, lang)}>
									{lang.name}
								</Button>
						  ))
						: null}
				</div>
			</LangSelectorContainer>
		);
	}
}
const mapDispatchToProps = {
	changeLanguage,
	getLanguages,
	getLanguage,
};
const mapStateToProps = (state) => {
	return {
		languages: state.languages,
		language: state.language,
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LangSelector);
