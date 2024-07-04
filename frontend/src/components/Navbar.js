// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li><Link to="/" className="text-white hover:text-blue-300 transition duration-300">Home</Link></li>
        <li><Link to="/create-quiz" className="text-white hover:text-blue-300 transition duration-300">Create Quiz</Link></li>
        <li><Link to="/take-quiz" className="text-white hover:text-blue-300 transition duration-300">Take Quiz</Link></li>
        <li><Link to="/auth" className="text-white hover:text-blue-300 transition duration-300">Login/Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;