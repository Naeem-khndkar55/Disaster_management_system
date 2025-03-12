import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = ({ currentUser }) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, SetToken] = useState(true);
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-2xl font-bold">DisErgency</h2>
        <ul className="flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            <li className="cursor-pointer">HOME</li>
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            <li className="cursor-pointer">DONATE</li>
          </NavLink>
          <NavLink
            to="/volunteer"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            <li className="cursor-pointer">VOLUNTEER</li>
          </NavLink>
          <NavLink
            to="/crisis"
            className={({ isActive }) =>
              isActive ? "text-yellow-400" : "hover:text-yellow-300"
            }
          >
            <li className="cursor-pointer">CRISIS</li>
          </NavLink>
        </ul>

        <div>
          {token ? (
            <div onClick={() => navigate("/account")}>myProfile</div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
            >
              Create Account
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
