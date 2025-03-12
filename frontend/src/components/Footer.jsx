import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-sm">&copy; 2025 DisErgency. All rights reserved.</p>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-yellow-400">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-yellow-400">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
