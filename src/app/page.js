// "use client";
// import { useGlobalContext } from "./context/globalContext";
// import SearchForm from "./components/SearchForm";
// import CardList from "./components/CardList";
// import MapsContainer from "./components/MapsContainer";
// import { clearLocalStorage } from "./utils/localStorage";

// export default function Application() {
//   const { favoritedPlaces, addFavoritedPlace, places, addPlaces } =
//     useGlobalContext();
//   // clearLocalStorage();

//   return (
//     //Bryt in till component?
//     <div className="section">
//       <div className="title-container">
//         <h1 className="title">Find your favorite places</h1>
//       </div>

//       <SearchForm addPlaces={addPlaces} />
//       <MapsContainer locations={favoritedPlaces} />
//       <CardList places={places} onFavorite={addFavoritedPlace} />
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { useGlobalContext } from "./context/globalContext";
import SearchForm from "./components/SearchForm";
import CardList from "./components/CardList";
import MapsContainer from "./components/MapsContainer";
import { clearLocalStorage } from "./utils/localStorage";
import Confetti from "react-dom-confetti";

export default function Application() {
  const { favoritedPlaces, addFavoritedPlace, places, addPlaces } =
    useGlobalContext();
  const [showConfetti, setShowConfetti] = useState(false); // State for controlling confetti

  function toggleConfetti() {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Hide confetti after 3 seconds
  }

  // clearLocalStorage(); // Uncomment this line if needed
  const confettiConfig = {
    angle: 90,
    spread: 360,
    startVelocity: 45,
    elementCount: 100,
    decay: 0.9,
    duration: 3000,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"],
  };
  return (
    <div className="section">
      <Confetti
        className="is-flex is-justify-content-center is-align-items-center"
        active={showConfetti}
        config={confettiConfig}
      />
      <div className="title-container">
        <h1 className="title">Find your favorite places</h1>
      </div>

      <SearchForm addPlaces={addPlaces} onFeelLucky={toggleConfetti} />
      <MapsContainer locations={favoritedPlaces} />
      <CardList places={places} onFavorite={addFavoritedPlace} />
    </div>
  );
}
