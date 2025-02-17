import React, { useState } from "react";
import { Menu, Close } from "@mui/icons-material";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu icon clicked!"); // Debugging click
    setIsMenuOpen(!isMenuOpen);
  };
  // Add this function inside your NavBar component
const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Close mobile menu after clicking if it's open
  setIsMenuOpen(false);
};


  return (
    <div className="relative z-[999] flex flex-1 items-center justify-between px-4 md:px-20 py-4 bg-transparent md:flex md:flex-1">
      {/* Logo and Links */}
      <div className="flex items-center space-x-8">
        <img src="/logo.png" alt="Logo" className="w-18  " />
        <div className="hidden items-center space-x-8 md:mr-24 text-lg cursor-pointer md:flex md:flex-1">
          <span onClick={() => scrollToSection('home')} className="text-white hover:text-gray-300">Home</span>
          <span onClick={() => scrollToSection('about')} className="text-white hover:text-gray-300">About</span>
          <span onClick={() => scrollToSection('services')} className="text-white hover:text-gray-300">Services</span>
          <span onClick={() => scrollToSection('testimonials')} className="text-white hover:text-gray-300">Testimonials</span>
          <span onClick={() => scrollToSection('contacts')} className="text-white hover:text-gray-300">Contact</span>
        </div>
      </div>

      {/* Signin/Signup Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="px-4 py-1 hover:bg-white text-white hover:text-black border border-white rounded-full text-sm md:text-base">
          Login
        </button>
        <button className="px-4 py-1 hover:bg-white text-white hover:text-black border border-white rounded-full text-sm md:text-base">
          Register
        </button>
      </div>

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center z-50">
        <button onClick={toggleMenu} className="text-white cursor-pointer">
          {isMenuOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-16 left-0 right-40 w-full bg-[#041B3A] text-white flex flex-col items-center space-y-4 py-4 z-40 transform transition-transform duration-300 ease-in-out cursor-pointer ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-96 opacity-0"
          }`}
      >
        <a href="#" className="hover:text-gray-300">Home</a>
        <a href="#" className="hover:text-gray-300">About</a>
        <a href="#" className="hover:text-gray-300">Activities</a>
        <a href="#" className="hover:text-gray-300">Contact</a>
        <div className="flex space-x-4">
          <button className="px-4 py-1 hover:bg-white text-white hover:text-black border border-white rounded-full text-sm">
            Login
          </button>
          <button className="px-4 py-1 hover:bg-white text-white hover:text-black border border-white rounded-full text-sm">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
