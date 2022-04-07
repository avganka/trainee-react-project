import { SORTING_TYPES } from './components/sort/sort';
import { City } from './types/cities';
import { Offer } from './types/offers';
import { offers as initilaOffers} from './mocks/offers';

export const sortOffers = (offers: Offer[], typeSort: string, city: City) => {

  switch (typeSort) {
    case SORTING_TYPES[0]:
      return filterOffers(initilaOffers, city);
    case SORTING_TYPES[1]:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SORTING_TYPES[2]:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SORTING_TYPES[3]:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const filterOffers = (offers: Offer[], city: City) => offers.filter((offer) => offer.city === city.title);
