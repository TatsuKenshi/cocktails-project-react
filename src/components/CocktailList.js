import React from "react";
import useCocktailContext from "../hooks/useCocktailContext";
import Cocktail from "../components/Cocktail";
import Loading from "../components/Loading";

const CocktailList = () => {
  const { cocktails, isLoading } = useCocktailContext();

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : cocktails.length < 1 ? (
        <div className="text-center">
          <h2>No cocktails match the search term...</h2>
        </div>
      ) : (
        <section className="text-center">
          <h2>Cocktails</h2>
          <div className="flex flex-wrap space-between">
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
