import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          readings: {
            celtic: 'Tirada celta',
            star: 'Tirada estrella',
            love: 'Tirada del amor',
            time: 'Tirada del Tiempo',
            yesno: 'Si o no',
            question: 'Pregunta concreta',
            chat: 'Chat con TarotiA'
          }
        }
      },
      // Otros idiomas se agregarán aquí
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;