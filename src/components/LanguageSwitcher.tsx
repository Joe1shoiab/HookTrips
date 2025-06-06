import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    // Update document direction
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    // Add language-specific class to body
    document.body.className = newLang === 'ar' ? 'font-arabic' : 'font-english';
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-full bg-[var(--primary)] hover:bg-[var(--primary-dark)] transition-colors"
      aria-label={t('language.select')}
    >
      <Globe size={18} />
      <span className="text-sm">{i18n.language === 'ar' ? 'English' : 'عربي'}</span>
    </button>
  );
};

export default LanguageSwitcher; 