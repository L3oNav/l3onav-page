import React from "react";
import UserInf from "../Components/UserInf.jsx";
import FontImg from "../Images/fondoUserInfo.jpg";
import UserImg from "../Images/UserImg.jpeg";
import LangSelector from "../Components/LangSelector.jsx";
import { connect } from "react-redux";
import { getLanguage } from "../Redux/actions/index";
import IfBackground from "../Components/IfBackground.jsx";

const User = {
	img: UserImg,
	name: "Leonardo Nava",
	username: "@L3oNav",
};

const Header = ({ language }) => {
	getLanguage();
	return (
	<div className='grid-info'>
		<LangSelector />
		<IfBackground/>
		<div className='header-inf'>
			{language ? (
				<UserInf UsrImg={User.img} UsrName={User.name} UsrJob={language.job} />
			) : null}
		</div>
	</div>
);
};
const mapStateToProps = (state) => {
	return {
		language: state.language,
	};
};
const mapDispatchToProps = {
	getLanguage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header)