import Card from "./ui/Card";

export default function CardList({ places }) {
  return (
    <section>
      {/* Map varje prop objekt och passera props till Card component */}
      {places.map((place, index) => (
        <Card key={index} name={place.name} rating={place.rating} />
      ))}
    </section>
  );
}
