import { Offer } from '../../types/offers';
import Bookmark from '../bookmark/boormark';

type NearbyOffersProps = {
  offers: Offer[],
  onListItemHover: (activeOffer: number) => void,
}

function NearbyOffers ({offers, onListItemHover}: NearbyOffersProps):JSX.Element {
  return (
    <>
      {
        offers.map((offer) => (
          <article key={offer.id} className="near-places__card place-card" onMouseEnter={() => onListItemHover(offer.id)}>
            <div className="near-places__image-wrapper place-card__image-wrapper">
              <a href="#todo">
                <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place img"/>
              </a>
            </div>
            <div className="place-card__info">
              <div className="place-card__price-wrapper">
                <div className="place-card__price">
                  <b className="place-card__price-value">&euro;{offer.price}</b>
                  <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <Bookmark isFavorite={offer.isFavorite} id={offer.id}/>
              </div>
              <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                  <span style={{ width: `${offer.rating * 100 / 5}%` }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
              </div>
              <h2 className="place-card__name">
                <a href="#todo">{offer.title}</a>
              </h2>
              <p className="place-card__type">{offer.type[0].toUpperCase()+offer.type.slice(1)}</p>
            </div>
          </article>
        ))
      }
    </>
  );
}

export default NearbyOffers;


