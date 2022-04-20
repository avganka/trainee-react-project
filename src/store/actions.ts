import { ActionType, ChangeCityAction, CreateOffersListAction, loadFavoritesAction, loadOffersAction, loadReviewsAction, sortingAction, loadDetailedOfferAction, requireAuthorizationAction, requireLogoutAction, loadNearbyOffersAction, loadUserEmailAction} from '../types/action';
import { Login } from '../types/login';
import { Offer } from '../types/offers';
import { Review } from '../types/reviews';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.changeCity,
  payload: city,
});

export const createOffersList = (): CreateOffersListAction => ({
  type: ActionType.createOffersList,
});

export const sorting = (sortingType: string): sortingAction => ({
  type: ActionType.sorting,
  payload: sortingType,
});

export const loadOffers = (offers: Offer[]): loadOffersAction => ({
  type: ActionType.loadOffers,
  payload: offers,
});

export const loadDetailedOffer = (offer: Offer): loadDetailedOfferAction => ({
  type: ActionType.loadDetailedOffer,
  payload: offer,
});

export const loadFavorites = (offers: unknown): loadFavoritesAction => ({
  type: ActionType.loadFavories,
  payload: offers,
});

export const loadNearbyOffers = (offers: Offer[]): loadNearbyOffersAction => ({
  type: ActionType.loadNearbyOffers,
  payload: offers,
});

export const loadReviews = (reviews: Review[]): loadReviewsAction => ({
  type: ActionType.loadReviews,
  payload: reviews,
});

export const requireAuthorization = (authStatus: Login): requireAuthorizationAction => ({
  type: ActionType.requireAuthorization,
  payload: authStatus,
});

export const loadUserEmail = (email: string): loadUserEmailAction => ({
  type: ActionType.loadUserEmail,
  payload: email,
});

export const requireLogout = (): requireLogoutAction => ({
  type: ActionType.requireLogout,
});

