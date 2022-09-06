// // // // //
// this is the single cocktail component to be displayed on the home page when we search for cocktails
// // // // //

import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="m-auto py-4 px-2 ">
      <div className=" bg-white border border-slate-100 rounded-lg hover:shadow-xl">
        <img src={image} alt={name} className="w-[300px] rounded-lg" />
        <div className="py-2">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        </div>
        <div className="mb-3">
          <Link
            to={`/cocktail/${id}`}
            className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white"
          >
            More Info
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
