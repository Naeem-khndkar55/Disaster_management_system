import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="py-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/donation" className="text-blue-600 hover:underline">
            Donation
          </Link>
        </li>
        <li>
          <Link to="/crisis" className="text-blue-600 hover:underline">
            Crisis
          </Link>
        </li>
        <li>
          <Link to="/volunteer" className="text-blue-600 hover:underline">
            Volunteer
          </Link>
        </li>
        {token ? (
          <>
            <li>
              <Link to="/inventory" className="text-blue-600 hover:underline">
                Inventory
              </Link>
            </li>
            <li>
              <Link to="/account" className="text-blue-600 hover:underline">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-blue-600 hover:underline">
                Dashboard
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="text-blue-600 hover:underline"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
