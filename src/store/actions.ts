import { ActionType, ChangeCityAction, CreateOffersListAction, sortingAction } from '../types/action';
import { City } from '../types/cities';

export const changeCity = (city: City): ChangeCityAction => ({
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
