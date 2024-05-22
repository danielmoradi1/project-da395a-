import Card from "./ui/Card";

export default function CardList({ places, onFavorite }) {
  return (
    <section>
      {places.map((place, index) => (
        <Card
          key={index}
          name={place.name}
          rating={place.rating}
          imageId={
            place.photos && place.photos.length > 0
              ? place.photos[0].photo_reference
              : null
          }
          onFavorite={() => onFavorite(place)}
        />
      ))}
    </section>
  );
}
