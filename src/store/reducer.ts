
import { cities } from '../mocks/cities';
import { offers } from '../mocks/offers';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';


const initOffers = offers.filter((offer) => offer.city === cities[0].title);


const initialState = {
  city: cities[0],
  offers: initOffers,
};


const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeCity:
      return {...state, city: {...action.payload}};
    case ActionType.createOffersList:
      return {...state, offers: offers.filter((offer) => offer.city === state.city.title)};
    default:
      return state;
  }
};

export {reducer};
