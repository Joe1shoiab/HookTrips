import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram
} from 'lucide-react';

const Footer: React.FC = () => {
  const [] = useState('');
  const [] = useState(false);


  return (
    <footer className="bg-[var(--primary)] pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Compass size={24} className="text-[var(--accent-light)]" />
              <span className="text-xl font-bold">Hook Trips</span>
            </div>
            <p className="mb-4 text-sm">
              Discover extraordinary destinations around the world with our expertly crafted travel experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61559620400948" aria-label="Facebook" className="text-[var(--accent-light)] hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/hook.trips/" aria-label="Instagram" className="text-[var(--accent-light)] hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
                {/* <a href="https://twitter.com" aria-label="Twitter" className="text-[var(--accent-light)] hover:text-white transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="https://youtube.com" aria-label="Youtube" className="text-[var(--accent-light)] hover:text-white transition-colors">
                  <Youtube size={20} />
                </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-[var(--accent-light)] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/destinations" className="text-sm hover:text-[var(--accent-light)] transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/booking" className="text-sm hover:text-[var(--accent-light)] transition-colors">Book a Trip</Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-[var(--accent-light)] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[var(--accent-light)] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-[var(--accent-light)]" />
                <span className="text-sm">Tahrir Square, Downtown<br />
                Cairo, 11511, Egypt</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">(+20) 115 359 5889</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[var(--accent-light)]" />
                <span className="text-sm">info@hooktrips.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for exclusive travel deals and tips.
            </p>
            <form onSubmit={handleSubscribe}>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="form-input rounded-r-none text-sm py-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit" 
                  className="bg-[var(--accent-light)] text-[var(--primary)] px-4 rounded-r-lg font-medium"
                >
                  Sign Up
                </button>
              </div>
              {isSubscribed && (
                <p className="text-[var(--success)] text-sm mt-2">
                  Thanks for subscribing!
                </p>
              )}
            </form>
          </div> */}
        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--secondary)] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Hook Trips. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <Link to="/privacy" className="text-xs hover:text-[var(--accent-light)] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-xs hover:text-[var(--accent-light)] transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/faq" className="text-xs hover:text-[var(--accent-light)] transition-colors">
              FAQ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;