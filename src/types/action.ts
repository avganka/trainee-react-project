import { Login, UserEmail } from './login';
import { Offer } from './offers';
import { Review } from './reviews';

export const enum ActionType {
  changeCity = 'main/changeCity',
  createOffersList = 'main/createOffersList',
  sorting = 'main/sortOffers',
  loadOffers = 'data/loadOffers',
  loadDetailedOffer = 'data/loadDetailedOffer',
  loadFavories = 'data/loadFavories',
  loadReviews = 'data/loadReviews',
  requireAuthorization = 'user/requireAuthorization',
  requireLogout = 'user/requireLogout',
  loadNearbyOffers= 'data/loadNearbyOffers',
  loadUserEmail= 'user/loadUserEmail',
}

export type ChangeCityAction = {
  type: ActionType.changeCity;
  payload: string;
}

export type CreateOffersListAction = {
  type: ActionType.createOffersList;
}

export type sortingAction = {
  type: ActionType.sorting;
  payload: string
}

export type loadOffersAction = {
  type: ActionType.loadOffers;
  payload: Offer[];
}
export type loadNearbyOffersAction = {
  type: ActionType.loadNearbyOffers;
  payload: Offer[];
}

export type loadDetailedOfferAction = {
  type: ActionType.loadDetailedOffer;
  payload: Offer;
}

export type loadFavoritesAction = {
  type: ActionType.loadFavories;
  payload: unknown;
}

export type loadReviewsAction = {
  type: ActionType.loadReviews;
  payload: Review[];
}
export type requireAuthorizationAction = {
  type: ActionType.requireAuthorization;
  payload: Login,
}

export type loadUserEmailAction = {
  type: ActionType.loadUserEmail;
  payload: UserEmail,
}


export type requireLogoutAction = {
  type: ActionType.requireLogout;
}

export type Actions = ChangeCityAction | CreateOffersListAction | sortingAction | loadOffersAction | loadFavoritesAction | loadReviewsAction | loadDetailedOfferAction | requireAuthorizationAction | requireLogoutAction| loadNearbyOffersAction | loadUserEmailAction;
