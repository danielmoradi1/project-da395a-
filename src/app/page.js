"use client";
import { useGlobalContext } from "./context/globalContext";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import MapsContainer from "./components/MapsContainer";
import { clearLocalStorage } from "./utils/localStorage";

export default function Application() {
  const { favoritedPlaces, addFavoritedPlace, places, addPlaces } =
    useGlobalContext();
  // clearLocalStorage();

  return (
    <>
      <SearchForm addPlaces={addPlaces} />
      <CardList places={places} onFavorite={addFavoritedPlace} />
      <MapsContainer locations={favoritedPlaces} />
    </>
  );
}
