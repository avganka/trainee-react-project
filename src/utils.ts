import { Cities, SortingTypes } from './const';
import { Offer } from './types/offers';

export const sortOffers = (offers:  Offer[], typeSort: `${SortingTypes}`, city:  `${Cities}`) => {
  switch (typeSort) {
    case SortingTypes.Popular:
      return offers;
    case SortingTypes.LowToHighPrice:
      return offers.slice().sort((a, b) => a.price - b.price);
    case SortingTypes.HighToLowPrice:
      return offers.slice().sort((a, b) => b.price - a.price);
    case SortingTypes.TopRated:
      return offers.slice().sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};

export const filterOffers = (offers:  Offer[], city:  string):Offer[] => offers.filter((offer) => offer.city.name === city);
