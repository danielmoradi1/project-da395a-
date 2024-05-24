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
    <div className="section">
      <div className="title-container">
        <h1 className="title">Find your favorite places</h1>
      </div>

      <SearchForm addPlaces={addPlaces} />
      <MapsContainer locations={favoritedPlaces} />
      <CardList places={places} onFavorite={addFavoritedPlace} />
    </div>
  );
}
