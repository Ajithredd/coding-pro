import React from 'react';
import logo from '../assets/l1.png';

const Header: React.FC = () => {
  return (
    <div>
      {/* Banner Message */}
      <div className="bg-teal-100 text-center font-bold py-4">
        Learn coding at the nearby <span className="text-blue-800">Coding Pro</span> Institute. 
        <a href="#" className="text-blue-800 underline">Enquire now</a>
      </div>

      {/* Main Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center p-6 bg-white shadow-md">
        {/* Logo Section */}
        <div className="flex items-center space-x-2 text-2xl font-bold text-blue-600 ml-6 mb-4 sm:mb-0">
          <img src={logo} alt="Coding Pro Logo" className="h-20 w-auto" />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col sm:flex-row space-x-20 sm:space-x-16 sm:ml-5 text-center sm:text-left mb-4 sm:mb-0">
          <a href="#" className="text-gray-600 hover:text-blue-600 text-lg mb-2 sm:mb-0">About Us</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-lg mb-2 sm:mb-0">Virtual Labs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-lg mb-2 sm:mb-0">Programs</a>
          <a href="#" className="text-gray-600 hover:text-blue-600 text-lg mb-2 sm:mb-0">For Colleges</a>
        </nav>

        {/* Action Buttons */}
        <div className="flex space-x-6 sm:space-x-4 mr-6">
          <button className="text-blue-600 border border-blue-600 px-6 py-3 text-lg rounded-lg hover:bg-blue-600 hover:text-white transition-all">
            Log in
          </button>
          <button className="bg-blue-600 text-white px-6 py-3 text-lg rounded-lg hover:bg-blue-700 transition-all">
            Register
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
