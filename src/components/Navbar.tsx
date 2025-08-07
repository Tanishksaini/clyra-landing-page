import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Monitor } from 'lucide-react';
import clyra from '../assets/clyra.png'; 
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
             <img 
              src={clyra} 
              alt="Clyra Logo" 
              className="w-20 h-20 object-contain rounded-lg" 
            />
            {/* <span className="text-2xl font-bold text-[#679F9F]">Clyra</span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-600 hover:text-[#679F9F] font-medium transition-colors duration-200 relative ${
                  location.pathname === item.path ? 'text-[#679F9F]' : ''
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#679F9F]"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
            <motion.a
              href="https://cms.clyra.net.in/login"
              className="bg-[#679F9F] hover:bg-[#5a8a8a] text-white px-6 py-2 rounded-lg font-medium transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Go to CMS
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-[#679F9F] transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 text-gray-600 hover:text-[#679F9F] hover:bg-gray-50 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-[#679F9F] bg-gray-50' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://cms.clyra.net.in/login"
              className="block mx-4 mt-4 bg-[#679F9F] hover:bg-[#5a8a8a] text-white px-6 py-2 rounded-lg font-medium text-center transition-colors duration-200"
            >
              Go to CMS
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;