import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";
import NoCocktail from "../components/NoCocktail";
import CocktailInfo from "../components/CocktailInfo";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  const getCocktail = async () => {
    setIsLoading(true);
    try {
      const response = await axios(`${url}${id}`);
      if (response) {
        const data = await response.data.drinks[0];
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
  };

  useEffect(() => {
    getCocktail();
  }, [id]);

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
