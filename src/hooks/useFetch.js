import axios from "axios";
import { useState, useCallback } from "react";

const useFetch = (url) => {
  // states
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [cocktails, setCocktails] = useState([]);

  //
  const fetchDrinks = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await axios(`${url}${searchTerm}`);
      const data = await response.data;

      // here, we extract the drinks array from the data property and map it to the newCocktails array if it has any items in it.
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

  // finally we return functions and states from the hook
  return {
    fetchDrinks,
    isLoading,
    searchTerm,
    cocktails,
    setSearchTerm,
  };
};

export default useFetch;
