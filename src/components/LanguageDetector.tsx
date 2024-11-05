import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageDetector: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const userLang = navigator.language.split('-')[0];
    const supportedLangs = ['es', 'en', 'pt', 'fr', 'it'];
    
    if (supportedLangs.includes(userLang) && userLang !== i18n.language) {
      i18n.changeLanguage(userLang);
    }
  }, [i18n]);

  return null;
};

export default LanguageDetector;