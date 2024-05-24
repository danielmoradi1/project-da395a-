import Card from "./ui/Card";

export default function CardList({ places, onFavorite }) {
  return (
    
    <div className="columns is-multiline">
      {places.map((place, index) => (
        <div className="column is-one-quarter" key={index}>
          <Card
            name={place.name}
            rating={place.rating}
            imageId={
              place.photos && place.photos.length > 0
                ? place.photos[0].photo_reference
                : null
            }
            onFavorite={() => onFavorite(place)}
          />
        </div>
      ))}
    </div>
  );
}
