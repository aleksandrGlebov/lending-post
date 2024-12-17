import React from 'react';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/hero.jpg';

const Header = () => {
  const { t } = useTranslation();
  return (
    <header
      className="relative w-full h-screen flex flex-col justify-center items-center text-white px-4"
      style={{ 
        backgroundImage: `url(${heroImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 max-w-3xl text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
          {t('title')}
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl mb-8 leading-snug font-light" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.7)' }}>
          {t('subtitle')}
        </p>
        <ul className="space-y-4 mb-8 text-xl md:text-2xl lg:text-3xl font-medium">
          {t('features', { returnObjects: true }).map((feature, index) => (
            <li key={index} style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}>
              {feature}
            </li>
          ))}
        </ul>
        <a 
          href="#contact"
          className="inline-block mt-6 px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full text-xl md:text-2xl hover:bg-yellow-600 transition-transform transform hover:scale-105"
        >
          {t('seeMore')}
        </a>
      </div>
    </header>
  );
};

export default Header;