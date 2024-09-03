import React from 'react';

const navLinks = [
  { name: "Home", href: "/home" },
  { name: "About Us", href: "/about-us" },
  { name: "Contact", href: "/contact" }
];

const Header = () => {
  return (
    <header className="bg-white shadow-lg sticky w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <a href='/home' className="text-3xl font-extrabold text-yellow-600">
         Laliguras
        </a>
        <nav>
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
      </div>
    </header>
  );
}

export default Header;
