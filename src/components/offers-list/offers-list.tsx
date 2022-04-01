import { useState } from 'react';
import { Offer } from '../../types/offers';
import OfferCard from '../offer-card/offer-card';

type RoomListProps = {
  offers: Offer[];
}


export default function OffersList ({offers}:RoomListProps) {

  const [activeCard, setActiveCard] = useState(0);

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <article className="cities__place-card place-card" key={offer.id} onMouseEnter={() => setActiveCard(offer.id)}>
            <OfferCard
              offer={offer}
            />
          </article>
        ))
      }
    </div>
  );
}
