"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { loadLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const storedFavoritedPlaces = loadLocalStorage("favoritedPlaces");
  const [favoritedPlaces, setFavoritedPlaces] = useState(storedFavoritedPlaces);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    saveToLocalStorage("favoritedPlaces", favoritedPlaces);
  }, [favoritedPlaces]);

  function addFavoritedPlace(place) {
    if (!favoritedPlaces.some((favorited) => favorited.name === place.name)) {
      setFavoritedPlaces([...favoritedPlaces, place]);
    }
  }
  // clearLocalStorage();

  function addPlaces(place) {
    console.log(place);
    setPlaces(place);
  }
  return (
    <GlobalContext.Provider
      value={{ favoritedPlaces, addFavoritedPlace, places, addPlaces }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}
