import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { Offer } from '../../types/offers';
import Bookmark from '../bookmark/boormark';

type FavoriteCardProps = {
  offer: Offer,
}

function FavoriteCard ({offer}: FavoriteCardProps):JSX.Element {
  const { title,  price, rating, previewImage, type} = offer;

  return (
    <article key={offer.id} className="favorites__card place-card">
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <a href="#todo">
          <img className="place-card__image" src={previewImage} width="150" height="110" alt="Place img"/>
        </a>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <Bookmark isFavorite id={offer.id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 100 / 5}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.Room}/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default FavoriteCard;
