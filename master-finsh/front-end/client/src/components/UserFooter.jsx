import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#073B4C] bg-opacity-90 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <span className="text-[#118AB2] font-bold text-xl">HealthCare</span>
            <p className="mt-2 text-sm text-gray-200">
              Your personal healthcare, always within reach.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="text-[#118AB2] font-semibold text-lg mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media and Contact */}
          <div className="text-center md:text-right">
            <h3 className="text-[#118AB2] font-semibold text-lg mb-4">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-8.379 4.482 13.94 13.94 0 01-10.126-5.14 4.916 4.916 0 001.523 6.557 4.902 4.902 0 01-2.229-.616v.062a4.917 4.917 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.59 3.417 9.867 9.867 0 01-6.102 2.105c-.398 0-.79-.023-1.175-.068a13.944 13.944 0 007.548 2.212c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0024 4.557z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85 0 3.204-.012 3.584-.07 4.85-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07-3.204 0-3.584-.012-4.85-.07-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85 0-3.204.012-3.584.07-4.85.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0 2.122c-3.153 0-3.527.016-4.806.07-1.288.056-2.24.261-3.003.595-.676.261-1.216.601-1.772 1.156-.555.556-.895 1.097-1.156 1.772-.334.763-.539 1.715-.595 3.003-.054 1.281-.064 1.654-.064 4.806 0 3.153.016 3.527.07 4.806.056 1.288.261 2.24.595 3.003.261.676.601 1.216 1.156 1.772.556.555 1.097.895 1.772 1.156.763.334 1.715.539 3.003.595 1.281.054 1.654.064 4.806.064 3.153 0 3.527-.016 4.806-.07 1.288-.056 2.24-.261 3.003-.595.676-.261 1.216-.601 1.772-1.156.555-.556.895-1.097 1.156-1.772.334-.763.539-1.715.595-3.003.054-1.281.064-1.654.064-4.806 0-3.153-.016-3.527-.07-4.806-.056-1.288-.261-2.24-.595-3.003-.261-.676-.601-1.216-1.156-1.772-.556-.555-1.097-.895-1.772-1.156-.763-.334-1.715-.539-3.003-.595-1.281-.054-1.654-.064-4.806-.064z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-[#EF476F] transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
            <p className="text-sm text-gray-200">Email: info@healthcare.com</p>
            <p className="text-sm text-gray-200">Phone: 0123456789</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm text-gray-300">
            &copy; {new Date().getFullYear()} HealthCare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
