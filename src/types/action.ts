import { City } from './cities';

export const enum ActionType {
  changeCity = 'main/changeCity',
  createOffersList = 'main/createOffersList',
  sorting = 'main/sortOffers'
}

export type ChangeCityAction = {
  type: ActionType.changeCity;
  payload: City;
}

export type CreateOffersListAction = {
  type: ActionType.createOffersList;
}

export type sortingAction = {
  type: ActionType.sorting;
  payload: string
}

export type Actions = ChangeCityAction | CreateOffersListAction | sortingAction;
