import axios from "axios";
import React, { createContext, useState, useEffect, useCallback } from "react";

export const CocktailContext = createContext();
const allCocktailsUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const CocktailContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios(`${allCocktailsUrl}${searchTerm}`);
      const data = await response.data;
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            drink;
          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [searchTerm]);

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
      }}
    >
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContextProvider;
