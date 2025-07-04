import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smartphone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Smartphone className="w-3 h-3 sm:w-5 sm:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl font-bold">Flutter Dev</span>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              Crafting beautiful, scalable mobile applications with Clean Architecture and modern Flutter practices.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Projects</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                  Green Puducherry
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                  JobSeeker Chat App
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-secondary transition-colors duration-200">
                  View All Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-base sm:text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="text-white/70">hello@flutterdev.com</p>
              <p className="text-white/70">+1 (555) 123-4567</p>
              <p className="text-white/70">Puducherry, India</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-white/70 order-2 sm:order-1">
            <span>Made with</span>
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-red-500" />
            <span>using React & Flutter expertise</span>
          </div>

          <div className="flex items-center space-x-4 order-1 sm:order-2">
            <p className="text-xs sm:text-sm text-white/70">
              © 2024 Flutter Developer. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 sm:w-10 sm:h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;