import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full bg-[#0D1534] py-4 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img 
              src="/mainlogo.png" 
              alt="HubConnect Logo" 
              className="cursor-pointer" 
              onClick={() => scrollToSection('home')}
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300">
              Home
            </button>
            <button onClick={() => scrollToSection('features')} className="text-white hover:text-gray-300">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-gray-300">
              How it works
            </button>
            <button onClick={() => scrollToSection('newsletter')} className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
              Join waitlist
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300 text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('features')} className="text-white hover:text-gray-300 text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('how-it-works')} className="text-white hover:text-gray-300 text-left">
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('newsletter')} 
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 w-full text-center"
              >
                Join waitlist
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;