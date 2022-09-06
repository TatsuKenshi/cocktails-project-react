import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CocktailContext = createContext();

// url for query-based bulk fetching
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContextProvider = ({ children }) => {
  // states
  const [showDropdown, setShowDropdown] = useState(false);

  const { fetchDrinks, isLoading, searchTerm, cocktails, setSearchTerm } =
    useFetch(url);

  // logic for tracking the dropdown menu state
  const hideDropdown = () => {
    if (window.innerWidth > "768") {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", hideDropdown);

    return () => window.removeEventListener("resize", hideDropdown);
  });

  // fetch useEffect
  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  return (
    <CocktailContext.Provider
      value={{
        isLoading,
        searchTerm,
        cocktails,
        setSearchTerm,
        showDropdown,
        setShowDropdown,
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContextProvider;
