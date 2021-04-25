import { Languages } from "../contexts/languages.context";
import React, { useState, useEffect } from "react";

const LangContext = React.createContext({
  lang: "",
  currentLangData: {},
  switchLang: () => {},
});

export default LangContext;

export const LangProvider = (props) => {
  const [lang, setLang] = useState("en-US");

  useEffect(() => {
    const selectedLang = window.localStorage.getItem("appUILang");
    if (selectedLang) {
      setLang(selectedLang);
    }
  }, [lang]);

  const switchLang = (ln) => {
    setLang(ln);
    window.localStorage.setItem("appUILang", ln);
  };

  return (
    <LangContext.Provider
      value={{
        lang,
        switchLang,
        currentLangData: Languages[lang],
      }}
    >
      {props.children}
    </LangContext.Provider>
  );
};
