//? React
import React from "react";
//? Redux
import { getLanguage } from "../../Redux/actions/index";
import { connect } from "react-redux";
//? Components
import LangSelector from "../../Components/LangSelector/index.jsx";
// import IfBackground from "../../Components/IfBackground/index.jsx";
//? Images
import UserInf from "../../Components/UserInf/index.jsx";
import UserImg from "../../Images/Userimg.jpg";
//? Styles


const User = {
	img: UserImg,
	name: "Leonardo Nava",
	username: "@L3oNav"
};

const Header = ({ language }) => {
	getLanguage();
	return (
		<div className="content-grid-header">
			<LangSelector />
			<div>
				{language ? (
					<UserInf
						UsrImg={User.img}
						UsrName={User.name}
						UsrJob={language.job}
					/>
				) : null}
			</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		language: state.language
	};
};
const mapDispatchToProps = {
	getLanguage
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
