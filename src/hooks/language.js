import {Languages} from '../contexts/languages.context'
import React, { useState, useLayoutEffect } from 'react';

const LangContext = React.createContext({
  lang: '',
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export function LangProvider (props) {

  const [lang, setLang] = useState(window.localStorage.getItem('appUILang') || window.navigator.language);
  

  useLayoutEffect(() => {
    const selectedLang = window.localStorage.getItem('appUILang');

    if (selectedLang) {
      setLang(selectedLang);
    } 
  }, [lang])

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem('appUILang', ln);
  };

  return (
    <LangContext.Provider value={{
      lang, 
      switchLang, 
      currentLangData: Languages[lang]
    }}>
      {props.children}
    </LangContext.Provider>
  );
};

