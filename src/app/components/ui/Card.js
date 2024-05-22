import getImageUrl from "@/app/utils/getImageUrl";


const ImageNotFound = "/images/imageNotFound.jpg";

export default function Card({ name, rating, imageId, onFavorite }) {
  const imageUrl = imageId ? getImageUrl(200, imageId) : null;

  return (
    <article>
      {imageUrl ? (
        <img src={imageUrl} alt={name} />
      ) : (
        <img src={ImageNotFound} alt="Image Not Found" />
      )}
      <h2>{name}</h2>
      <p>{rating}</p>
      <button onClick={onFavorite}>Favorite</button>
    </article>
  );
}