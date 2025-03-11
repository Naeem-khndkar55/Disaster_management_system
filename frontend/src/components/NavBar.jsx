import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <h2>DisErgency</h2>
      <ul>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
        <NavLink>
          <li>HOME</li>
          <hr />
        </NavLink>
      </ul>
    </div>
  );
};

export default NavBar;
