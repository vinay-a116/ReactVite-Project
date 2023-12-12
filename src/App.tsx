import React, { useState } from "react";
import "./App.css";
import "./i18n";
import { useTranslation } from "react-i18next";
import { Button } from "antd";
import Lang from "./Lang";
const App = (): JSX.Element => {
  const {
    t,
    i18n: { changeLanguage, language },
  } = useTranslation();
  console.log(JSON.stringify(language));
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "es" : "en";
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <React.Fragment>
      <Lang />
    </React.Fragment>
  );
};

export default App;
