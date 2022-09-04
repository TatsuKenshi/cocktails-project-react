import React from "react";
import Search from "../components/Search";
import CocktailList from "../components/CocktailList";

const Home = () => {
  return (
    <main className="bg-slate-200">
      <div>
        <h1>Home Page</h1>
      </div>
      <div className="text-center">
        <Search />
        <CocktailList />
      </div>
    </main>
  );
};

export default Home;
