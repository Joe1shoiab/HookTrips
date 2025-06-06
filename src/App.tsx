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
    // Ensure smooth scrolling works consistently
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };

    // Add a small delay to ensure the new page content is loaded
    setTimeout(scrollToTop, 100);
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