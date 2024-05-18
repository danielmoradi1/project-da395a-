import getImageUrl from "@/app/utils/getImageUrl";

export default function Card({ name, rating, imageId }) {
  return (
    <article>
      <img src={getImageUrl(200, imageId)} alt={name} />
      <h2>{name}</h2>
      <p>{rating}</p>
    </article>
  );
}
