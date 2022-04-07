
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { filterOffers, sortOffers } from '../utils';


const initOffers = offers.filter((offer) => offer.city === cities[0].title);


const initialState = {
  city: cities[0],
  offers: initOffers,
  sortingType: 'Popular',
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeCity:
      return {...state, city: {...action.payload}};
    case ActionType.createOffersList:
      return {...state, offers: filterOffers(offers, state.city)};
    case ActionType.sorting:
      return {...state, sortingType: action.payload, offers: sortOffers(state.offers, action.payload, state.city)};
    default:
      return state;
  }
};

export {reducer};
