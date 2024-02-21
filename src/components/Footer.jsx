import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-gray-600">Created by Your Name</div>
        <div className="space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
          <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
