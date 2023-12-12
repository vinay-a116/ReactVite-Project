import { Button } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Lang = (): JSX.Element => {
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
    <div className="App">
      <h1>
        Our Translated Header:
        {t("headerTitle")}
      </h1>
      <h3>Current Language: {currentLanguage}</h3>
      <Button onClick={handleChangeLanguage}>Change Language</Button>
    </div>
  );
};

export default Lang;
