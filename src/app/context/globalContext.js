"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { loadLocalStorage, saveToLocalStorage } from "../utils/localStorage";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const storedFavoritedPlaces = loadLocalStorage("favoritedPlaces");
  const [favoritedPlaces, setFavoritedPlaces] = useState(storedFavoritedPlaces || []);
  const [places, setPlaces] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  function toggleConfetti() {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1);
  }

  useEffect(() => {
    saveToLocalStorage("favoritedPlaces", favoritedPlaces);
  }, [favoritedPlaces]);

  function addFavoritedPlace(place) {
    if (!favoritedPlaces.some((favorited) => favorited.name === place.name)) {
      setFavoritedPlaces([...favoritedPlaces, place]);
    }
  }

  function removeFavoritedPlace(place) {
    setFavoritedPlaces(favoritedPlaces.filter((favorited) => favorited.name !== place.name));
  }

  function addPlaces(place) {
    console.log(place);
    setPlaces(place);
  }

  return (
    <GlobalContext.Provider
      value={{
        favoritedPlaces,
        addFavoritedPlace,
        removeFavoritedPlace,
        places,
        addPlaces,
        toggleConfetti,
        showConfetti,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(GlobalContext);
}