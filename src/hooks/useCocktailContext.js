import { useContext } from "react";
import { CocktailContext } from "../context/CocktailContext";

const useCocktailContext = () => {
  return useContext(CocktailContext);
};

export default useCocktailContext;
