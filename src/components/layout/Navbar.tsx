import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Compass, MapPin } from 'lucide-react';
import LanguageSwitcher from '../LanguageSwitcher';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[var(--primary)] shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        <NavLink to="/" className="flex items-center space-x-2">
          <Compass size={28} className="text-[var(--accent-light)]" />
          <span className="text-xl font-bold">Hook Trips</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'font-semibold border-b-2 border-[var(--accent-light)]' : ''}`
            }
          >
            {t('nav.home')}
          </NavLink>
          <NavLink 
            to="/destinations" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'font-semibold border-b-2 border-[var(--accent-light)]' : ''}`
            }
          >
            {t('nav.destinations')}
          </NavLink>
          <NavLink 
            to="/trips" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'font-semibold border-b-2 border-[var(--accent-light)]' : ''}`
            }
          >
            {t('nav.trips')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'font-semibold border-b-2 border-[var(--accent-light)]' : ''}`
            }
          >
            {t('nav.about')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `nav-link ${isActive ? 'font-semibold border-b-2 border-[var(--accent-light)]' : ''}`
            }
          >
            {t('nav.contact')}
          </NavLink>
          <LanguageSwitcher />
          <NavLink 
            to="/booking" 
            className="btn btn-accent flex items-center"
          >
            <MapPin size={18} className="mr-2" />
            {t('nav.bookNow')}
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-[var(--secondary)] fixed top-[60px] left-0 w-full h-screen transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container py-6 flex flex-col">
          <NavLink 
            to="/" 
            className="py-4 text-xl border-b border-[var(--primary)]"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.home')}
          </NavLink>
          <NavLink 
            to="/destinations" 
            className="py-4 text-xl border-b border-[var(--primary)]"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.destinations')}
          </NavLink>
          <NavLink 
            to="/trips" 
            className="py-4 text-xl border-b border-[var(--primary)]"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.trips')}
          </NavLink>
          <NavLink 
            to="/about" 
            className="py-4 text-xl border-b border-[var(--primary)]"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.about')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className="py-4 text-xl border-b border-[var(--primary)]"
            onClick={() => setIsOpen(false)}
          >
            {t('nav.contact')}
          </NavLink>
          <div className="pt-2">
            <LanguageSwitcher />
          </div>
          <NavLink 
            to="/booking" 
            className="btn btn-accent mt-6 flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <MapPin size={18} className="mr-2" />
            {t('nav.bookNow')}
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;