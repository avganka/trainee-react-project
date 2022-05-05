import { Cities, SortingTypes } from '../const';
import { RootState } from '../store/root-reducer';
import { Login, UserEmail } from './login';
import { Offer } from './offers';
import { Review } from './reviews';

export type OffersData = {
  offers: Offer[];
  detailedOffer: Offer | null,
  nearbyOffers: Offer[] | null,
  favoriteOffers: Offer[],
  reviews: Review[],
  isDataLoaded: boolean,
  sortingType: `${SortingTypes}`,
  activeCity: `${Cities}`
}

export type UserProcess = {
  authorizationStatus: Login,
  userEmail: UserEmail | null
}

export type State = RootState;


