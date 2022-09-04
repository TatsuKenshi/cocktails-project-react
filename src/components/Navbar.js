import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="flex">
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ul className="mt-1">
          <li className="inline mx-4">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="inline mx-4">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
