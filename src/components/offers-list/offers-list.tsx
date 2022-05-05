import { memo, useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { getActiveCity, getSortingType } from '../../store/selectors/selectros';
import { Id, Offer } from '../../types/offers';
import { sortOffers } from '../../utils';
import OfferCard from '../offer-card/offer-card';
import Sort from '../sort/sort';

type RoomListProps = {
  offers: Offer[];
  onListItemHover: (id: Id) => void,
}

function OffersList ({offers, onListItemHover}:RoomListProps) {

  const activeCity = useSelector(getActiveCity);
  const sortingType = useSelector(getSortingType);

  const sortedOffersMemoized = useMemo(() => sortOffers(offers, sortingType, activeCity), [offers, sortingType, activeCity]);
  const onListItemHoverMemoized = useCallback(onListItemHover, [onListItemHover]);

  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{sortedOffersMemoized.length} places to stay in {activeCity}</b>
      <Sort/>
      <div className="cities__places-list places__list tabs__content">
        {
          sortedOffersMemoized.map((offer) => (
            <article className="cities__place-card place-card" key={offer.id} onMouseEnter={() => onListItemHoverMemoized(offer.id)}>
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

export default memo(OffersList);
