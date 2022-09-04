import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const SingleCocktail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  console.log(cocktail);

  useEffect(() => {
    setIsLoading(true);
    async function getCocktail() {
      try {
        const response = await axios(`${url}${id}`);
        if (response) {
          const data = await response.data.drinks[0];

          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data;

          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ];

          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
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
    }
    getCocktail();
  }, [id]);

  return (
    <>
      {isLoading ? (
        <div>
          <Loading />
        </div>
      ) : !cocktail ? (
        <div>
          <h2>No Cocktail To Display</h2>
        </div>
      ) : (
        <section>
          <Link to="/">Back Home</Link>
          <h2>{cocktail.name}</h2>
          <div>
            <img src={cocktail.image} alt={cocktail.name} className="w-32" />
            <div>
              <p>
                <span>Name : {cocktail.name}</span>
              </p>
              <p>
                <span>Category : {cocktail.category}</span>
              </p>
              <p>
                <span>Glass : {cocktail.glass}</span>
              </p>
              <p>
                <span>Instructions : {cocktail.instructions}</span>
              </p>
              <p>
                <span>Ingredients : </span>
                {cocktail?.ingredients.map((ingredient, index) => {
                  return ingredient ? (
                    <span key={index}>{ingredient} </span>
                  ) : null;
                })}
              </p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleCocktail;
