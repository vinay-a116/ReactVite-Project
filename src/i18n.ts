import i18n from "i18next";
import translationEn from "@/language/en/translations.json";
import translationCh from "@/language/ch/translations.json";
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: translationEn,
  },
  es: {
    translation: translationCh,
  },
} as const;

export const i18nkey = "i18n";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: "en",
  resources,
  ns: ["translation"],
  //   defaultNS: "translations",
});

i18n.languages = ["en", "es"];

export default i18n;
