"use client"
import React, { useState } from 'react';

const navLinks = [
  { name: "Home", href: "/laliguras/home" },
  { name: "About Us", href: "/laliguras/about-us" },
  { name: "Contact", href: "/laliguras/contact" }
];

const Header = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href='/laliguras/home' className="text-3xl hover:text-yellow-800 font-extrabold text-yellow-600">
          Laliguras
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center space-x-6">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-lg text-gray-800 hover:text-yellow-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setDrawerOpen(!isDrawerOpen)}
          className="md:hidden text-2xl text-gray-800 focus:outline-none"
        >
          {isDrawerOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-transform transform ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
      >
        <div className="relative w-64 bg-white h-full p-4">
          <button
            onClick={() => setDrawerOpen(false)}
            className="absolute top-4 right-4 text-2xl text-gray-800"
          >
            ✕
          </button>
          <ul className="space-y-4 mt-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-lg text-gray-800 hover:text-yellow-500 transition-colors duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
