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
    <section className="justify-self-center">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">search the cocktail database</label>
        </div>
        <div>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktails}
            className="border border-slate-500 p-1"
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
