import React from "react";

const CocktailInfo = ({ cocktail }) => {
  return (
    <section className="pt-40  max-w-[900px] mx-auto">
      <div>
        <img
          src={cocktail.image}
          alt={cocktail.name}
          className="w-[90%] mx-auto  max-w-[400px]"
        />
        <div className="w-[90%] mx-auto divide-y divide-double divide-slate-500">
          <p className="p-2">
            <span>
              {" "}
              <span className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white">
                Name
              </span>{" "}
              : {cocktail.name}
            </span>
          </p>
          <p className="p-2">
            <span>
              {" "}
              <span className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white">
                Category
              </span>{" "}
              : {cocktail.category}
            </span>
          </p>
          <p className="p-2">
            <span>
              {" "}
              <span className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white">
                Glass
              </span>{" "}
              : {cocktail.glass}
            </span>
          </p>
          <p className="p-2">
            <span>
              {" "}
              <span className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white">
                Instructions
              </span>{" "}
              : {cocktail.instructions}
            </span>
          </p>
          <p className="p-2">
            <span className="border border-slate-400 p-1 rounded-lg bg-lime-800 text-white">
              Ingredients{" "}
            </span>{" "}
            <span className="ml-1"> : </span>
            {cocktail?.ingredients.map((ingredient, index) => {
              return ingredient ? <span key={index}>{ingredient} </span> : null;
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

export default CocktailInfo;
