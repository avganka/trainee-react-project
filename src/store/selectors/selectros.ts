import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';

const getData = ({DATA}: State) => DATA;
export const getAuthStatus = ({USER}: State) => USER.authorizationStatus;
export const getUserEmail = ({USER}: State) => USER.userEmail;
export const getActiveCity = ({DATA}: State) => DATA.activeCity;
export const getFavoriteOffers = ({DATA}: State) => DATA.favoriteOffers;
export const getDetailedOffer = ({DATA}: State) =>DATA.detailedOffer;
export const getNearbyOffers = ({DATA}: State) =>DATA.nearbyOffers;
export const getReviews = ({DATA}: State) =>DATA.reviews;
export const getSortingType = ({DATA}: State) => DATA.sortingType;

export const selectOffers = createSelector(getData, ({offers, activeCity}) => offers.filter((offer) => offer.city.name === activeCity));

