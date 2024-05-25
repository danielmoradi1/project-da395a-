"use client";
import { useGlobalContext } from "./context/globalContext";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import MapsContainer from "./components/MapsContainer";
import PageHeader from "./components/PageHeader";
import ConfettiComponent from "./components/ui/Confetti";

export default function Application() {
  const {
    favoritedPlaces,
    addFavoritedPlace,
    removeFavoritedPlace,
    places,
    addPlaces,
    toggleConfetti,
    showConfetti,
  } = useGlobalContext();

  return (
    <div className="section">
      <ConfettiComponent active={showConfetti} />
      <PageHeader />
      <SearchForm addPlaces={addPlaces} onFeelLucky={toggleConfetti} />
      <MapsContainer locations={favoritedPlaces} />
      <CardList
        places={places}
        onFavorite={addFavoritedPlace}
        onRemoveFavorite={removeFavoritedPlace}
        favoritedPlaces={favoritedPlaces}
      />
    </div>
  );
}
