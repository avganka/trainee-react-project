import { ThunkAction } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { useNavigate } from 'react-router-dom';
import { APIRoute, AuthStatus } from '../const';
import { removeToken, saveToken } from '../services/token';
import { Actions } from '../types/action';
import { AuthData } from '../types/login';
import { State } from '../types/state';
import {loadOffers, loadFavorites, loadReviews, loadDetailedOffer, requireAuthorization, requireLogout, loadNearbyOffers } from './actions';

export const loadOffersFromServer = (): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Hotels);
    dispatch(loadOffers(data));
    // dispatch(createOffersList());
  };

export const loadDetailedOfferFromServer = (id: number): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    if (id) {
      const { data } = await api.get(`${APIRoute.Hotels}/${id}`);
      dispatch(loadDetailedOffer(data));
    }
  };

export const loadNearbyOffersFromServer = (id: number): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    if (id) {
      const { data } = await api.get(`${APIRoute.Hotels}/${id}/nearby`);
      dispatch(loadNearbyOffers(data));
    }
  };

export const loadFavoritesFromServer = (): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    const { data } = await api.get(APIRoute.Favorite);
    dispatch(loadFavorites(data));
  };

export const loadReviewsFromServer = (id: number): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    if (id) {
      const { data } = await api.get(`${APIRoute.Comments}/${id}`);
      dispatch(loadReviews(data));
    }
  };

export const checkAuthAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthStatus.Auth));
      })
      .catch(() => {
        dispatch(requireAuthorization(AuthStatus.NoAuth));
      });
  };

export const loginAction = ({email, password}: AuthData): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    const { data } =  await api.post(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthStatus.Auth));
  };


export const logoutAction = (): ThunkAction<Promise<void>, State, AxiosInstance, Actions> =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    removeToken();
    dispatch(requireLogout());
  };

