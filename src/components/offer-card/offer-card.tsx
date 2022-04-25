import { memo } from 'react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { Offer } from '../../types/offers';
import Bookmark from '../bookmark/boormark';

type OfferProps = {
  offer: Offer
}

function OfferCard ({offer}: OfferProps):JSX.Element {
  const { id, title, isPremium, price, rating, type, previewImage, isFavorite} = offer;

  return (
    <>
      { isPremium
        ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#todo">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place "
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">
                            &#47;&nbsp;night
            </span>
          </div>
          <Bookmark isFavorite={isFavorite} id={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 100 / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoutes.Room}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type[0].toUpperCase()+type.slice(1)}</p>
      </div>
    </>
  );
}

export default memo(OfferCard);
