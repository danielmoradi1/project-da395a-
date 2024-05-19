import getImageUrl from "@/app/utils/getImageUrl";

export default function Card({ name, rating, imageId, onFavorite }) {
  return (
    <article>
      {/* Check ?getImageUrl : insert temp img path */}
      <img src={getImageUrl(200, imageId)} alt={name} />
      <h2>{name}</h2>
      <p>{rating}</p>
      <button onClick={onFavorite}>Favorite</button>
    </article>
  );
}
