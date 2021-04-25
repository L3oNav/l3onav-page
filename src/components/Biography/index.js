import React from "react";
import SocialLinks from "../SocialLinks/index";
import styles from "./style.module.css";

const Biography = ({ title, biography }) => {
	return (
		<div className={styles.container}>
			<div className={styles.text_container}>
				<div>{title}</div>
				<div>{biography}</div>
			</div>
			<SocialLinks />
		</div>
	);
};

export default Biography;
