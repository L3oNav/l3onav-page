import React from "react";
import Image from "next/image";
import styles from "./style.module.css";

const InfoUser = ({ job }) => {
	return (
		<div className={styles.container}>
			<Image
				className={styles.img}
				src="/Userimg.jpg"
				alt="Leonardo Photo"
				width={250}
				height={250}
			/>
			<p className={styles.text_info}>
				<div>Leonardo Nava</div>
				{job}
			</p>
		</div>
	);
};

export default InfoUser;
