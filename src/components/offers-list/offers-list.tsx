import { Offer } from '../../types/offers';
import { sortOffers } from '../../utils';
import OfferCard from '../offer-card/offer-card';
import Sort from '../sort/sort';

type RoomListProps = {
  offers: Offer[];
  onListItemHover: (activeOffer: number) => void,
  activeCity: string,
  sortingType: string,
}

export default function OffersList ({offers, onListItemHover, activeCity, sortingType}:RoomListProps) {

  const sortedOffers = sortOffers(offers, sortingType, activeCity);

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffers.length} places to stay in {activeCity}</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffers.map((offer) => (
            <article className="cities__place-card place-card" key={offer.id} onMouseEnter={() => onListItemHover(offer.id)}>
              <OfferCard
                offer={offer}
              />
            </article>
          ))
        }
      </div>
    </>
  );
}
