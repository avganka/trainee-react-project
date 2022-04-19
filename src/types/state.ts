import { Login } from './login';
import { Offer } from './offers';
import { Review } from './reviews';

export type State = {
  activeCity: string,
  offers: Offer[];
  detailedOffer: Offer | null,
  nearbyOffers: Offer[] | null,
  sortingType: string,
  favoriteOffers: unknown,
  reviews: Review[],
  isDataLoaded: boolean,
  authorizationStatus: Login,
}

