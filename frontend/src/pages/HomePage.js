// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center shadow-lg p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg">
        Welcome to the Quiz Platform
      </h1>
    </div>
  );
};

export default HomePage;