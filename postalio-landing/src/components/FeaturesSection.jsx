import React from 'react';
import { useTranslation } from 'react-i18next';
import { DeviceMobileIcon } from '@heroicons/react/outline';

const FeaturesSection = () => {
  const { t } = useTranslation();
  
  const featuresList = t('featuresList', { returnObjects: true });
  const icons = [DeviceMobileIcon];
  
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-8 text-gray-900"
          data-aos="fade-up"
        >
          {t('featuresTitle')}
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresList.map((feature, index) => {
            const Icon = icons[index % icons.length];
            // Определяем, является ли это единственной фичей
            const isSingle = featuresList.length === 1;
            const spanClass = isSingle ? 'md:col-span-3' : 'col-span-1';
            const justifyClass = isSingle ? 'flex justify-center' : '';
            return (
              <div 
                key={index} 
                className={`bg-white p-6 rounded shadow-md flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ${spanClass} ${justifyClass}`} 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                  {feature}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;