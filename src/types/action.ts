import { City } from './cities';

export const enum ActionType {
  changeCity = 'main/changeCity',
  createOffersList = 'main/createOffersList'
}

export type ChangeCityAction = {
  type: ActionType.changeCity;
  payload: City;
}

export type CreateOffersListAction = {
  type: ActionType.createOffersList;
}

export type Actions = ChangeCityAction | CreateOffersListAction;
