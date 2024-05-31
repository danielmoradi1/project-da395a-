"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { loadLocalStorage, saveToLocalStorage } from "../utils/localStorage";

// Creates a context for global state management
const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const storedFavoritedPlaces = loadLocalStorage("favoritedPlaces");
  const [favoritedPlaces, setFavoritedPlaces] = useState(
    storedFavoritedPlaces || []
  );
  const [places, setPlaces] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  function toggleConfetti() {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1);
  }

  // Updates favorited places to local storage whenever it changes
  useEffect(() => {
    saveToLocalStorage("favoritedPlaces", favoritedPlaces);
  }, [favoritedPlaces]);

  //Checks if place is already favorited, before updating favorite state
  function addFavoritedPlace(place) {
    if (
      !favoritedPlaces.some(
        (favorited) => favorited.reference === place.reference
      )
    ) {
      setFavoritedPlaces([...favoritedPlaces, place]);
    }
  }

  function removeFavoritedPlace(place) {
    setFavoritedPlaces(
      favoritedPlaces.filter(
        (favorited) => favorited.reference !== place.reference
      )
    );
  }

  function addPlaces(place) {
    setPlaces(place);
  }

  return (
    // Provides the global context to children components
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
