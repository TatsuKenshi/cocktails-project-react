// // // // //
// this component displays the list of cocktails which match the search term on the home page when we search for cocktails
// // // // //

import React from "react";
import useCocktailContext from "../hooks/useCocktailContext";
import Cocktail from "../components/Cocktail";
import Loading from "../components/Loading";

const CocktailList = () => {
  const { cocktails, isLoading } = useCocktailContext();

  return (
    <>
      {isLoading ? (
        <div className="w-[150px] mx-auto mt-8">
          <Loading />
        </div>
      ) : cocktails.length < 1 ? (
        <div className="w-[90%] mx-auto">
          <h2 className="text-lg">
            No <span className="text-lime-800 font-bold">cocktails</span> match
            the search term...
          </h2>
        </div>
      ) : (
        <section>
          <h2 className="pt-6 text-2xl text-lime-800 font-bold">Cocktails</h2>
          <div className="flex flex-wrap justify-evenly max-w-[1200px] mx-auto">
            {cocktails.map((cocktail) => {
              return <Cocktail key={cocktail.id} {...cocktail} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default CocktailList;
