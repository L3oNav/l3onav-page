import React, { useContext } from 'react';
import { FaLanguage } from 'react-icons/fa';
import LangContext from '../../hooks/language'
import { Text, Column } from './styles';
const LanguageSelector = () => {

	const { switchLang, lang } = useContext(LangContext)

	const handleChangeLanguage = () => {
		if (lang === 'en-US'){
			switchLang('es-ES')
		}	else { 
			switchLang('en-US')
		}
	}

	return (
		<Column onClick={() => handleChangeLanguage()}>
			<FaLanguage
				size='40px'
				color='#219100'
				type='button'
			/>
			<Text>{lang.substring(3)}</Text>
		</Column>
	);
}

export default LanguageSelector;
