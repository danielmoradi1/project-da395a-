import getImageUrl from "@/app/utils/getImageUrl";

export default function Card({ name, adress, rating, imageId, onFavorite }) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={getImageUrl(1000, imageId)} alt={name} />
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
          <button className="button is-primary" onClick={onFavorite}>
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
