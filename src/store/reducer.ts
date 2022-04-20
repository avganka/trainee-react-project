import { AuthStatus } from '../const';
import { Actions, ActionType } from '../types/action';
import { State } from '../types/state';
import { filterOffers } from '../utils';

const initialState: State = {
  activeCity: 'Paris',
  offers: [],
  detailedOffer: null,
  nearbyOffers: null,
  sortingType: 'Popular',
  favoriteOffers: [],
  reviews: [],
  isDataLoaded: false,
  authorizationStatus: AuthStatus.Unknown,
  userEmail: null,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.changeCity:
      return {...state, activeCity: action.payload};
    case ActionType.createOffersList:
      return {...state, offers: filterOffers(state.offers, state.activeCity)};
    case ActionType.sorting:
      return {...state, sortingType: action.payload};
    case ActionType.loadOffers:
      return {...state, offers: action.payload, isDataLoaded: true};
    case ActionType.loadDetailedOffer:
      return {...state, detailedOffer: action.payload};
    case ActionType.loadFavories:
      return {...state, favoriteOffers: action.payload};
    case ActionType.loadReviews:
      return {...state, reviews: action.payload};
    case ActionType.requireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.requireLogout:
      return {...state, authorizationStatus: AuthStatus.NoAuth};
    case ActionType.loadNearbyOffers:
      return {...state, nearbyOffers: action.payload};
    case ActionType.loadUserEmail:
      return {...state, userEmail: action.payload};
    default:
      return state;
  }
};

export {reducer};
