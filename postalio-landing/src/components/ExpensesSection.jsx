import React from 'react';
import { useTranslation } from 'react-i18next';
import { CashIcon, RefreshIcon, CogIcon } from '@heroicons/react/outline'

const ExpensesSection = () => {
  const { t } = useTranslation();

  const expensesList = t('expenses', { returnObjects: true });
  const mappedExpenses = [
    {
      text: expensesList[0],
      Icon: CashIcon, // Иконка денег для покупки аппарата
    },
    {
      text: expensesList[1],
      Icon: RefreshIcon, // Иконка обновления для restocking
    },
    {
      text: expensesList[2],
      Icon: CogIcon, // Иконка шестерёнки для ежемесячного обслуживания
    },
  ];

  return (
    <section 
      className="py-20 bg-gradient-to-b from-white via-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-6">
        <h2 
          className="text-3xl md:text-4xl font-extrabold text-center mb-10 text-gray-900"
          data-aos="fade-up"
        >
          {t('expensesTitle')}
        </h2>

        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 max-w-4xl mx-auto">
          {mappedExpenses.map((expense, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex-1 flex flex-col items-center text-center transform hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-yellow-100 text-yellow-600 rounded-full flex items-center justify-center mb-4">
                <expense.Icon className="h-8 w-8" />
              </div>
              <p className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                {expense.text.split('–')[0].trim()}
              </p>
              <p className="text-gray-700 text-md md:text-lg">
                {expense.text.split('–')[1].trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpensesSection;