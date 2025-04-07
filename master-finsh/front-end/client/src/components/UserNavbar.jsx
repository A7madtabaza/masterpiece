import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = ({ cartItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav
      className={`fixed w-full z-20 top-0 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F6F5] bg-opacity-80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 flex-row-reverse">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-[#0A4C6A] font-bold text-xl">MediCare</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="mr-10 flex items-center space-x-6">
              <Link
                to="/user/faq"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link
                to="/user/contact"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                to="/user/pharmacy"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Pharmacy
              </Link>
              <Link
                to="/user/articles"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Articles
              </Link>
              <Link
                to="/user/about"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                About
              </Link>
              <Link
                to="/"
                className="text-[#0A4C6A] hover:text-[#00A896] px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Home
              </Link>
            </div>
          </div>

          {/* Cart and Sign Up Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/user/cart"
              className="relative text-[#0A4C6A] hover:text-[#00A896] transition-colors duration-200"
            >
              <ShoppingCart size={20} />
              {cartItems?.length > 0 && (
                <span className="absolute -top-2 -left-2 bg-[#FF6F61] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <Link
              to="/user/register"
              className="bg-[#00A896] hover:bg-[#FF6F61] text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 shadow-sm"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#0A4C6A] hover:text-[#00A896] hover:bg-[#F5F6F5] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#00A896]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#F5F6F5] bg-opacity-80 backdrop-blur-md shadow-md">
            <Link
              to="/user/faq"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
            <Link
              to="/user/contact"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/user/pharmacy"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Pharmacy
            </Link>
            <Link
              to="/user/articles"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Articles
            </Link>
            <Link
              to="/user/about"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/"
              className="text-[#0A4C6A] hover:text-[#00A896] block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/user/cart"
              className="text-[#0A4C6A] hover:text-[#00A896] flex items-center px-3 py-2 rounded-md text-base font-medium flex-row-reverse"
              onClick={toggleMenu}
            >
              <ShoppingCart size={20} className="ml-2" />
              Cart
              {cartItems?.length > 0 && (
                <span className="mr-2 bg-[#FF6F61] text-white text-xs font-bold rounded-full px-2 py-0.5">
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </span>
              )}
            </Link>
            <Link
              to="/user/register"
              className="w-full text-right bg-[#00A896] hover:bg-[#FF6F61] text-white px-3 py-2 rounded-md text-base font-medium mt-2 transition-colors duration-200 block"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
