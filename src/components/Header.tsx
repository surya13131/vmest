import React, { useState } from 'react';
import logo from '../assets/logo.svg'; 

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Updated items to match the section IDs exactly
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Why Us', href: '#why-us' }
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 w-full z-[100] px-4 md:px-6 flex justify-center font-['Inter']">
      <div className="bg-white/90 backdrop-blur-md rounded-full px-6 md:px-12 py-3 flex items-center justify-between w-full max-w-[1400px] border border-gray-100/50">
        
        {/* Logo Section */}
        <div className="flex items-center shrink-0">
          <a href="#home">
            <img 
              src={logo} 
              alt="WeNest Logo" 
              className="w-[110px] md:w-[140px] h-auto object-contain cursor-pointer" 
            />
          </a>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-14">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-[16px] font-semibold text-[#2D312E] hover:text-[#5DBD09] transition-colors tracking-tight"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Desktop Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-[15px] font-bold bg-[#5DBD09] text-white px-8 py-3.5 rounded-full hover:bg-[#4ea308] transition-all shadow-md active:scale-95">
             Contact Us
          </button>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#2D312E] focus:outline-none"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`w-full h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* --- MOBILE SIDEBAR --- */}
      <div 
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      <div className={`fixed top-0 right-0 h-screen w-[280px] bg-[#D8D2C6] shadow-2xl transition-transform duration-300 ease-in-out md:hidden flex flex-col p-8 z-[110] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-between items-center mb-12">
          <img src={logo} alt="Logo" className="w-24 h-auto" />
          <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
        </div>

        <nav className="flex flex-col gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-xl font-bold text-[#2D312E] hover:text-[#5DBD09]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="mt-auto">
          <button className="w-full text-[16px] font-bold bg-[#5DBD09] text-white py-4 rounded-xl shadow-lg">
              Contact Us
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;