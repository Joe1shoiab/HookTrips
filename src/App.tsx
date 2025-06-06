import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import './i18n';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes';

const App: React.FC = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    // Set initial direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.body.className = i18n.language === 'ar' ? 'font-arabic' : 'font-english';
  }, [i18n.language]);

  useEffect(() => {
    // Reset scroll position when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

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