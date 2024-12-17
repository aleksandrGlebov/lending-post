import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-full p-2 flex space-x-2">
        <button 
          onClick={() => changeLanguage('en')} 
          className="px-3 py-1 text-white font-semibold hover:bg-black hover:bg-opacity-30 rounded-full transition"
        >
          EN
        </button>
        <button 
          onClick={() => changeLanguage('es')} 
          className="px-3 py-1 text-white font-semibold hover:bg-black hover:bg-opacity-30 rounded-full transition"
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSelector;