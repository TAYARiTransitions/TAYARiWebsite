import React, { useState, useEffect } from 'react';
import tayariLogo from "./assets/GLYPH.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className={`flex justify-between px-2 sm:px-10 py-3 content-center items-center w-full z-50 ${scrolled ? 'bg-blue-950 bg-opacity-90 fixed' : 'absolute'} top-0 left-0 transition-all duration-300`}>
        <div className="navLogo">
          <a href="#"><img src={tayariLogo} alt="logo" className="w-14" /></a> 
        </div>
        <div className="navLink hidden md:flex gap-[65px] text-md" id='linkItem'>
          <Link to='/' className={`${scrolled ? 'text-white font-semibold' : 'text-white'}`}>Home</Link>
          <Link to='/AboutUs' className={`${scrolled ? 'text-white font-semibold' : 'text-white'}`}>About Us</Link>
          <Link to='/OurInternship' className={`${scrolled ? 'text-white font-semibold' : 'text-white'}`}>Internships</Link>
          <Link to='/OurProgrammes' className={`${scrolled ? 'text-white font-semibold' : 'text-white'}`}>Programs</Link>
        </div>
        <div className="btnJoin hidden md:block">
          <Link to='/Join Us' id='btnJoin' className="text-white font-normal pri2 px-3 py-3 rounded-sm text-md">Contact Us</Link>
        </div>
        <button className="md:hidden" onClick={toggleMenu}>
          {/* Toggle button with animation */}
          <span className={`block w-6 h-0.5 mb-1 bg-white transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 mb-1 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0 ' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex flex-col items-center justify-center z-50" onClick={closeMenu}>
          
          <button className="md:hidden absolute top-8 right-2" onClick={toggleMenu}>
          {/* Toggle button with animation */}
          <span className={`block w-6 h-0.5 mb-1 bg-white transition-transform duration-300 ${menuOpen ? 'transform rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 mb-1 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0 ' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>

          <div className="flex flex-col text-white text-md gap-2 text-center">
            <Link to='/' onClick={closeMenu}>Home</Link>
            <Link to='/AboutUs' onClick={closeMenu}>About Us</Link>
            <Link to='/OurInternship' onClick={closeMenu}>Internships</Link>
            <Link to='/OurProgrammes' onClick={closeMenu}>Programs</Link>
            <Link to='/Join Us' onClick={closeMenu}>Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
