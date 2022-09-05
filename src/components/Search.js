import React, { useEffect, useRef } from "react";
import useCocktailContext from "../hooks/useCocktailContext";

const Search = () => {
  const { setSearchTerm } = useCocktailContext();
  const searchValue = useRef("");

  const searchCocktails = () => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <section className="py-2">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="text-xl">
            Search the <span className="text-lime-800 font-bold">Cocktail</span>{" "}
            Database
          </label>
        </div>
        <div>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
            className="border border-lime-800 p-1 mt-2 rounded-lg max-w-[90%]"
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
