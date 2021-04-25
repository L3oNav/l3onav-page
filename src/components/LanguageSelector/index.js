import React, { useContext } from "react";
import { FaLanguage } from "react-icons/fa";
import LangContext from "../../hooks/language";
import styles from "./styles.module.css";

const LanguageSelector = () => {
	const { switchLang, lang } = useContext(LangContext);

	const handleChangeLanguage = () => {
		if (lang === "en-US") {
			switchLang("es-ES");
		} else {
			switchLang("en-US");
		}
	};

	return (
		<div className={styles.column} onClick={() => handleChangeLanguage()}>
			<FaLanguage size="40px" color="#219100" type="button" />
			<p className={styles.text}>{lang.slice(3)}</p>
		</div>
	);
};

export default LanguageSelector;
