import Image from "next/image";
import getImageUrl from "@/app/utils/getImageUrl";

const ImageNotFound = "/images/imageNotFound.jpg";

export default function Card({ name, adress, rating, imageId, onFavorite, onRemoveFavorite, isFavorited }) {
  const imageUrl = imageId ? getImageUrl(1000, imageId) : null;

  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          {imageUrl ? (
            <img src={imageUrl} alt={name} />
          ) : (
            <Image
              src={ImageNotFound}
              alt="Image Not Found"
              width={200}
              height={200}
            />
          )}
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            <p className="title is-4">{name}</p>
            <p className="subtitle is-6">{adress}</p>
            <p className="subtitle is-6">Rating: {rating}</p>
          </div>
        </div>
        <div className="content">
          {isFavorited ? (
            <button className="button is-danger" onClick={onRemoveFavorite}>
              Remove Favorite
            </button>
          ) : (
            <button className="button is-primary" onClick={onFavorite}>
              Favorite
            </button>
          )}
        </div>
      </div>
    </div>
  );
}