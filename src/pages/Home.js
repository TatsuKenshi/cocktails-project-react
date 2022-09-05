import React from "react";
import Search from "../components/Search";
import CocktailList from "../components/CocktailList";

const Home = () => {
  return (
    <main className="pt-40 w-[90%] mx-auto">
      <Search />
      <CocktailList />
    </main>
  );
};

export default Home;
