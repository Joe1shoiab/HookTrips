import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';

const App: React.FC = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = i18n.language === 'ar' ? 'font-arabic' : 'font-english';
  }, [i18n.language]);

  return (
    <div className={`min-h-screen flex flex-col ${i18n.language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Navbar />
      <main className="flex-grow">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default App;