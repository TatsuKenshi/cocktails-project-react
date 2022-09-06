import React from "react";
import { FiHome, FiInfo } from "react-icons/fi";
import { Link } from "react-router-dom";
import useCocktailContext from "../hooks/useCocktailContext";

const DropdownMenu = () => {
  const { setShowDropdown } = useCocktailContext();

  return (
    <div className="w-screen bg-white mt-16 md:hidden fixed z-10 border border-solid border-slate-300 divide-y divide-solid divide-slate-300">
      <div className="w-screen border-bottom-slate-800">
        <Link to="/">
          <p
            className="text-2xl inline-flex"
            onClick={() => setShowDropdown(false)}
          >
            <FiHome className="mr-1 mt-1 w-6 h-6" />{" "}
            <span className="text-lime-900">Home</span>
          </p>
        </Link>
      </div>
      <div className="w-screen">
        <Link to="/about">
          <p
            className="text-2xl inline-flex"
            onClick={() => setShowDropdown(false)}
          >
            <FiInfo className="mr-1 mt-1 w-6 h-6" />{" "}
            <span className="text-lime-900">About</span>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default DropdownMenu;
