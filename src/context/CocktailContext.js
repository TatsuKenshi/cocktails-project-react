import React, { createContext } from "react";

export const CocktailContext = createContext();

const CocktailContextProvider = ({ children }) => {
  return (
    <CocktailContext.Provider value={"hello"}>
      {children}
    </CocktailContext.Provider>
  );
};

export default CocktailContextProvider;
