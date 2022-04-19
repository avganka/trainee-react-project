import { SORTING_TYPES } from './components/sort/sort';
import { Offer } from './types/offers';

export const sortOffers = (offers:  Offer[], typeSort:  string, city:  string) => {

  switch (typeSort) {
    case SORTING_TYPES[0]:
      return filterOffers(offers, city);
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

export const filterOffers = (offers:  Offer[], city:  string):Offer[] => offers.filter((offer) => offer.city.name === city);
