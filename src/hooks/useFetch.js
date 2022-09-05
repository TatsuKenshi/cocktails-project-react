import axios from "axios";
import { useState, useCallback } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios(`${url}${searchTerm}`);
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

  return {
    fetchDrinks,
    isLoading,
    searchTerm,
    cocktails,
    setSearchTerm,
  };
};

export default useFetch;
