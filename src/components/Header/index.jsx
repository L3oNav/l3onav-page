//? React
import React, { Component } from "react";
import LanguageSelector from "../LanguageSelector/index";
import styles from "./style.module.css";
class Header extends Component {
	render() {
		return (
			<div className="flex">
				<LanguageSelector />
			</div>
		);
	}
}

export default Header;
