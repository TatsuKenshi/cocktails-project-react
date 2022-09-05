import React, { createContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const CocktailContext = createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContextProvider = ({ children }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { fetchDrinks, isLoading, searchTerm, cocktails, setSearchTerm } =
    useFetch(url);

  const hideDropdown = () => {
    if (window.innerWidth > "768") {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    fetchDrinks();
  }, [searchTerm, fetchDrinks]);

  useEffect(() => {
    window.addEventListener("resize", hideDropdown);

    return () => window.removeEventListener("resize", hideDropdown);
  });

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
