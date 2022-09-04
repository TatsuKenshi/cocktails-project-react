import React, { useContext } from "react";
import { CocktailContext } from "../context/CocktailContext";

const Home = () => {
  const data = useContext(CocktailContext);
  console.log(data);
  return <div>Home</div>;
};

export default Home;
