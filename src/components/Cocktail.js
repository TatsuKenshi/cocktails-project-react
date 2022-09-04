import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ id, image, name, info, glass }) => {
  return (
    <article className="m-auto p-4">
      <div className=" bg-white border border-slate-100 rounded-md hover:shadow-xl">
        <div>
          <img src={image} alt={name} style={{ width: "250px" }} />
        </div>
        <div className="py-2">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        </div>
        <div className="mb-2">
          <Link to={`/cocktail/${id}`}>More Info</Link>
        </div>
      </div>
    </article>
  );
};

export default Cocktail;
