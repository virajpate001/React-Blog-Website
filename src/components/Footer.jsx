import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p>&copy; 2024 Your Company</p>
        </div>
        <div>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-400">About</a></li>
            <li><a href="#" className="hover:text-gray-400">Services</a></li>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
