//? React
import React, { Component } from "react";
import LanguageSelector from "../LanguageSelector/index";
import styles from "./style.module.css";
const Header = () => (
	<div className={styles.flex}>
		<LanguageSelector />
	</div>
);

export default Header;
