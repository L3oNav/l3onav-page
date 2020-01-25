/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react";
import UserInf from "../Components/UserInf.jsx";
import FontImg from "../Images/fondoUserInfo.jpg";
import UserImg from "../Images/UserImg.jpeg";
import LangSelector from "../Components/LangSelector.jsx";
import { getLanguage } from "../Redux/actions/index";
import { connect } from "react-redux";

const User = {
	img: UserImg,
	name: "Leonardo Nava",
	twitter: "https://platzi.com/@L3oNav/",
};

class Header extends Component {
	componentDidMount() {
		if (!this.props.language) {
			this.props.getLanguage();
		}
	}
	render() {
		const { language } = this.props;
		return (
				<div className='grid-info'>
					<div>
						<LangSelector />
					</div>
					<div className='overflow'>
						<img src={FontImg} className='font-img' />
					</div>
					<div className='header-inf'>
						{language? 
							<UserInf UsrImg={User.img} UsrName={User.name} UsrJob={language.job} />
							: null
						}
					</div>
				</div>
		)
	}
}

const mapStateToProps = (state) => {
  return { 
    language: state.language,
  }
};
const mapDispatchToProps = {
	getLanguage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

