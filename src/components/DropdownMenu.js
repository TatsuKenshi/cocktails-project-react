import React from "react";
import { FiHome, FiInfo } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useCocktailContext from "../hooks/useCocktailContext";

const DropdownMenu = () => {
  const navigate = useNavigate();
  const { setShowDropdown } = useCocktailContext();

  return (
    <div className="w-screen bg-white mt-16 md:hidden fixed z-10 border border-solid border-slate-300 divide-y divide-solid divide-slate-300">
      <div className="w-screen border-bottom-slate-800">
        <p
          className="text-2xl inline-flex"
          onClick={() => {
            navigate("/");
            setShowDropdown(false);
          }}
        >
          <FiHome className="mr-1 mt-1 w-6 h-6" />{" "}
          <span className="text-lime-900">Home</span>
        </p>
      </div>
      <div className="w-screen">
        <p
          className="text-2xl inline-flex"
          onClick={() => {
            navigate("/about");
            setShowDropdown(false);
          }}
        >
          <FiInfo className="mr-1 mt-1 w-6 h-6" />{" "}
          <span className="text-lime-900">About</span>
        </p>
      </div>
    </div>
  );
};

export default DropdownMenu;
