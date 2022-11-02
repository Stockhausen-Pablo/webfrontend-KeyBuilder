import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import de from './de.json'
import en from './en.json'

const resources = {
  en: {
    translation: en
  },
  de: {
    translation: de
  }
};

i18n.use(LanguageDetector).use(initReactI18next).init({
  resources,
  detection: {
    caches: []
  },
  fallbackLng: 'de',
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
