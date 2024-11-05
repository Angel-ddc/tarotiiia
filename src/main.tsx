import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import LanguageDetector from './components/LanguageDetector';
import './index.css';
import './i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageDetector />
      <App />
    </BrowserRouter>
  </StrictMode>
);