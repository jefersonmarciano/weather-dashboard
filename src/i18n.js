import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import pt from './i18n/pt.json';
import en from './i18n/en.json';
import es from './i18n/es.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
      es: { translation: es },
    },
    lng: 'pt', // Idioma padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;