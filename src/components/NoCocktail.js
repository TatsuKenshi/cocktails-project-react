import React from "react";
import { Link } from "react-router-dom";

const NoCocktail = () => {
  return (
    <div className="pt-40  max-w-[1200px] mx-auto">
      <h2 className="text-xl mb-2">
        No <span className="text-lime-800 font-bold">Cocktail</span> To Display
      </h2>
      <Link
        to="/"
        className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white"
      >
        Back Home
      </Link>
    </div>
  );
};

export default NoCocktail;
