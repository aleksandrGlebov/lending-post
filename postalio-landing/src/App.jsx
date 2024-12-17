import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import ExpensesSection from './components/ExpensesSection';
import FeaturesSection from './components/FeaturesSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans">
      <LanguageSelector />
      <Header />
      <ExpensesSection />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default App;