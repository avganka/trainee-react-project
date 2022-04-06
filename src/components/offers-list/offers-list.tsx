import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type RoomListProps = {
  offers: Offer[];
  onListItemHover: (activeOffer: string) => void
}


export default function OffersList ({offers, onListItemHover}:RoomListProps) {

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <article className="cities__place-card place-card" key={offer.id} onMouseEnter={() => onListItemHover(offer.id)}>
            <OfferCard
              offer={offer}
            />
          </article>
        ))
      }
    </div>
  );
}
