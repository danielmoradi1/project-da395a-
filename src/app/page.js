"use client";
import { useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import MapsContainer from "./components/MapsContainer";
import {
  clearLocalStorage,
  loadLocalStorage,
  saveToLocalStorage,
} from "./utils/localStorage";

export default function Application() {
  const storedPlaces = loadLocalStorage("favoritedPlaces");
  const [favoritedPlaces, setFavoritedPlaces] = useState(storedPlaces);
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
    <>
      <SearchForm addPlaces={addPlaces} />
      <CardList places={places} onFavorite={addFavoritedPlace} />
      <MapsContainer />
    </>
  );
}
