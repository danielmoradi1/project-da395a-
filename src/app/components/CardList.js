import Card from "./ui/Card";

export default function CardList({
  places,
  onFavorite,
  onRemoveFavorite,
  favoritedPlaces,
}) {
  return (
    <div className="columns is-multiline">
      {/* Map over the places array to generate a Card for each place */}
      {places.map((place, index) => {
        // Check if the current place is in the favoritedPlaces array
        const isFavorited = favoritedPlaces.some(
          (favorited) => favorited.reference === place.reference
        );
        // Return a column div containing a Card component
        return (
          <div className="column is-one-quarter" key={index}>
            <Card
              name={place.name}
              rating={place.rating}
              adress={place.formatted_address}
              imageId={
                place.photos && place.photos.length > 0
                  ? place.photos[0].photo_reference
                  : null
              }
              onFavorite={() => onFavorite(place)}
              onRemoveFavorite={() => onRemoveFavorite(place)}
              isFavorited={isFavorited}
            />
          </div>
        );
      })}
    </div>
  );
}
