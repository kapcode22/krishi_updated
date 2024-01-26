// LanguageSelector.js
import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSelector = () => {
  const { language, changeLanguage } = useContext(LanguageContext);

  const handleLanguageChange = (e) => {
    changeLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="fr">Hindi</option>
      {/* Add more languages as needed */}
    </select>
  );
};

export default LanguageSelector;
