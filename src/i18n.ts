import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import {embeddedLocales, languages} from "./locale";

i18n
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    resources: embeddedLocales,
    supportedLngs: languages,
    lng: 'id', // default language
    fallbackLng: 'id', // Language to use if translations in user language are not available.
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  }).then(r =>{});

export default i18n;
