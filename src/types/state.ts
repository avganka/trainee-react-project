import { Login, UserEmail } from './login';
import { Offer } from './offers';
import { Review } from './reviews';

export type State = {
  activeCity: string,
  offers: Offer[];
  detailedOffer: Offer | null,
  nearbyOffers: Offer[] | null,
  sortingType: string,
  favoriteOffers: Offer[],
  reviews: Review[],
  isDataLoaded: boolean,
  authorizationStatus: Login,
  userEmail: UserEmail | null
}

