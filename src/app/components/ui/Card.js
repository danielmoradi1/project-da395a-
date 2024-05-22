import getImageUrl from "@/app/utils/getImageUrl";

export default function Card({ name, rating, imageId, onFavorite }) {
  return (
    <article>
      <img
        src={
          imageId
            ? getImageUrl(200, imageId)
            : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
        }
        alt={name}
      />
      <h2>{name}</h2>
      <p>{rating}</p>
      <button onClick={onFavorite}>Favorite</button>
    </article>
  );
}
