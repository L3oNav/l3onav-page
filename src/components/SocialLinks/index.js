import React, { Component } from "react";
import {
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiGithub,
	FiMail,
	FiPackage,
} from "react-icons/fi";
import styles from "./style.module.css";
const social = [
	{
		id: 1,
		alt: "instagram",
		component: FiInstagram,
		url: "https://www.instagram.com/l3onav.py",
	},
	{
		id: 2,
		alt: "linkedin",
		component: FiLinkedin,
		url: "https://www.linkedin.com/in/leonardonava",
	},
	{
		id: 3,
		alt: "twitter",
		component: FiTwitter,
		url: "https://twitter.com/L3oNav",
	},
	{
		id: 4,
		alt: "github",
		component: FiGithub,
		url: "https://github.com/L3oNav",
	},
	{
		id: 5,
		alt: "email",
		component: FiMail,
		url: "mailto:L3oNav@outlook.com?",
	},
	{
		id: 6,
		alt: "repository",
		component: FiPackage,
		url: "https://github.com/L3oNav/l3onav-page",
	},
];

const SocialLinks = () => (
	<div className={styles.container}>
		<div className={styles.grid}>
			{social.map((link) => (
				<a
					className={styles.article}
					key={link.id}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					alt={link.alt}
				>
					<link.component size="35" color="white" />
					<p>{link.alt}</p>
				</a>
			))}
		</div>
	</div>
);

export default SocialLinks;
