// LanguageContext.js
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };


  const translations = {
    en: {
      home: 'Home',
      about: 'About',
      // Add more translations as needed
    },
    fr: {
        home:'होम',
      farming: 'खेती',
      about: 'हमारे बारे में',
      // Add more translations as needed
    }
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
