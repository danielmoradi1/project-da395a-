import Card from "./ui/Card";

export default function CardList({ places }) {
  return (
    <section>
      {places.map((place, index) => (
        <Card
          key={index}
          name={place.name}
          rating={place.rating}
          imageId={place.photos[0].photo_reference}
        />
      ))}
    </section>
  );
}
