import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FiMenu } from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";
import useCocktailContext from "../hooks/useCocktailContext";

const Navbar = () => {
  const { showDropdown, setShowDropdown } = useCocktailContext();

  return (
    <>
      <nav className="fixed bg-white shadow-xl">
        <div className="flex h-16 pl-8 pr-8 pt-4 w-screen justify-between align-baseline">
          <NavLink to="/">
            <img src={logo} alt="" />
          </NavLink>
          <ul className="hidden md:inline mt-1">
            <li className="inline mx-16 text-xl font-bold text-lime-800">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="inline mx-8 text-xl font-bold text-lime-800">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
          <div className="md:hidden pl-4">
            <FiMenu
              className="h-[30px] w-[30px] text-lime-800"
              onClick={() => {
                setShowDropdown(!showDropdown);
              }}
            />
          </div>
        </div>
      </nav>
      {showDropdown && <DropdownMenu />}
    </>
  );
};

export default Navbar;
