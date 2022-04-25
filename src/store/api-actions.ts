import { Action, ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { reviewFormData } from '../components/form-review/form-review';
import { APIRoute, AuthStatus } from '../const';
import { removeEmail, saveEmail } from '../services/email';
import { removeToken, saveToken } from '../services/token';
import { AuthData } from '../types/login';
import { Id } from '../types/offers';
import { State } from '../types/state';
import { changeDetailedOffer, changeFavoriteOffer, changeNearbyOffers, changeOffer, fetchDetailedOffer, fetchFavorites, fetchNearbyOffers, fetchOffers, fetchReviews } from './offers-data/offers-data';
import { fetchUserEmail, requireAuthorization, requireLogout } from './user-process/user-process';

export const fetchOffersAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Hotels);
    dispatch(fetchOffers(data));
  };

export const fetchDetailedOfferAction = (id: Id): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    if (id) {
      const detailedOfferData = await api.get(`${APIRoute.Hotels}/${id}`);
      dispatch(fetchDetailedOffer(detailedOfferData.data));

      const nearbyOffersData = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
      dispatch(fetchNearbyOffers(nearbyOffersData.data));
    }
  };

export const fetchReviewsAction = (id: Id): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    if (id) {
      const reviewsData = await api.get(`${APIRoute.Comments}/${id}`);
      dispatch(fetchReviews(reviewsData.data));
    }
  };

export const fetchFavoritesAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Favorite);
    dispatch(fetchFavorites(data));
  };

export const postFavoriteOfferAction = (id: Id, isFavorite: boolean): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, getState, api) => {
    await api.post(`${APIRoute.Favorite}/${id}/${Number(!isFavorite)}`)
      .then(({data}) => {
        dispatch(changeOffer(data.id));
        dispatch(changeFavoriteOffer(data.id));
        if (getState().DATA.detailedOffer) {
          dispatch(changeDetailedOffer());
        }
        if (getState().DATA.nearbyOffers) {
          dispatch(changeNearbyOffers(data.id));
        }
      });
  };


export const postReviewAction = (id: Id, review: reviewFormData): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    api.post(`${APIRoute.Comments}/${id}`, review)
      .then(({data}) => {
        dispatch(fetchReviews(data));
      })
      .catch((error) => {
        throw new Error(`Не удалось отправить комментарий. Ошибка: ${error}`);
      });
  };

export const checkAuthAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthStatus.Auth));
      })
      .catch(() => {
        dispatch(requireAuthorization(AuthStatus.NoAuth));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    const { data } =  await api.post(APIRoute.Login, {email, password});
    saveToken(data.token);
    saveEmail(data.email);
    dispatch(requireAuthorization(AuthStatus.Auth));
    dispatch(fetchUserEmail(data.email));
  };


export const logoutAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Action> =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    removeToken();
    removeEmail();
    dispatch(requireLogout());
  };

