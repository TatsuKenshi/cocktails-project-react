import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import NoCocktail from "../components/NoCocktail";
import CocktailInfo from "../components/CocktailInfo";

// url for a single cocktail
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  // states
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  console.log(cocktail);

  // data fetching
  const getCocktail = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${url}${id}`);
      if (response) {
        // even with one drink, data.drinks is an array
        const data = await response.data.drinks[0];

        // simplified cocktail object
        const newCocktail = {
          name: data.strDrink,
          image: data.strDrinkThumb,
          info: data.strAlcoholic,
          category: data.strCategory,
          glass: data.strGlass,
          instructions: data.strInstructions,
          ingredients: [
            data.strIngredient1,
            data.strIngredient2,
            data.strIngredient3,
            data.strIngredient4,
            data.strIngredient5,
          ],
        };
        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCocktail();
  }, [id, getCocktail]);

  return (
    <>
      {isLoading ? (
        <div className="w-[150px] mx-auto pt-40  max-w-[1200px]">
          <Loading />
        </div>
      ) : cocktail === null ? (
        <NoCocktail />
      ) : (
        <CocktailInfo cocktail={cocktail} />
      )}
    </>
  );
};

export default SingleCocktail;
