import React, { useState } from "react"; // Add useState
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Add state for mobile menu

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              DisasterSync
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li>
              <Link
                to="/"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Donation
              </Link>
            </li>
            <li>
              <Link
                to="/crisis"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Crisis
              </Link>
            </li>
            <li>
              <Link
                to="/volunteer"
                className="hover:text-blue-200 transition-colors duration-200"
              >
                Volunteer
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link
                    to="/inventory"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-blue-200 transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu (Visible when toggled) */}
        {isMobileMenuOpen && (
          <ul className="md:hidden flex flex-col space-y-4 pb-4 px-4">
            <li>
              <Link
                to="/"
                className="hover:text-blue-200"
                onClick={toggleMobileMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donation"
                className="hover:text-blue-200"
                onClick={toggleMobileMenu}
              >
                Donation
              </Link>
            </li>
            <li>
              <Link
                to="/crisis"
                className="hover:text-blue-200"
                onClick={toggleMobileMenu}
              >
                Crisis
              </Link>
            </li>
            <li>
              <Link
                to="/volunteer"
                className="hover:text-blue-200"
                onClick={toggleMobileMenu}
              >
                Volunteer
              </Link>
            </li>
            {token ? (
              <>
                <li>
                  <Link
                    to="/inventory"
                    className="hover:text-blue-200"
                    onClick={toggleMobileMenu}
                  >
                    Inventory
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="hover:text-blue-200"
                    onClick={toggleMobileMenu}
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-blue-200"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogout();
                      toggleMobileMenu();
                    }}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg w-full text-left"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  to="/login"
                  className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded-lg block"
                  onClick={toggleMobileMenu}
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
