import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cities, SortingTypes } from '../../const';
import { Offer } from '../../types/offers';
import { Review } from '../../types/reviews';
import { OffersData } from '../../types/state';

const initialState: OffersData = {
  offers: [],
  detailedOffer: null,
  nearbyOffers: null,
  favoriteOffers: [],
  reviews: [],
  isDataLoaded: false,
  activeCity: Cities.Paris,
  sortingType: SortingTypes.Popular,
};

const offersData = createSlice({
  name: 'offersData',
  initialState: initialState,
  reducers: {
    fetchOffers(state, action: PayloadAction<Offer[]>) {
      state.offers = action.payload;
      state.isDataLoaded = true;
    },
    fetchDetailedOffer(state, action: PayloadAction<Offer>) {
      state.detailedOffer = action.payload;
    },
    fetchFavorites(state, action: PayloadAction<Offer[]>) {
      state.favoriteOffers = action.payload;
    },
    fetchReviews(state, action: PayloadAction<Review[]>) {
      state.reviews = action.payload;
    },
    fetchNearbyOffers(state, action: PayloadAction<Offer[]>) {
      state.nearbyOffers = action.payload;
    },
    changeOffer (state, action: PayloadAction<number>) {
      state.offers.forEach((offer) => {
        if (offer.id === action.payload) {
          offer.isFavorite = !offer.isFavorite;
        }
      });
    },
    changeFavoriteOffer (state, action: PayloadAction<number>) {
      state.favoriteOffers = state.favoriteOffers.filter((offer) => offer.id !== action.payload);
    },
    changeDetailedOffer (state) {
      if (state.detailedOffer) {
        state.detailedOffer.isFavorite = !state.detailedOffer.isFavorite;
      }
    },
    changeNearbyOffers (state, action: PayloadAction<number>) {
      if (state.nearbyOffers) {
        state.nearbyOffers.forEach((offer) => {
          if (offer.id === action.payload) {
            offer.isFavorite = !offer.isFavorite;
          }
        });
      }
    },
    changeCity (state, action: PayloadAction<`${Cities}`>) {
      state.activeCity = action.payload;
    },
    sortOffers (state, action: PayloadAction<`${SortingTypes}`>) {
      state.sortingType = action.payload;
    },
    restoreDetailedOffer (state) {
      state.detailedOffer = null;
      state.reviews = [];
      state.nearbyOffers = null;
    },
  },
});

export const {fetchOffers, fetchDetailedOffer, fetchFavorites, fetchReviews, fetchNearbyOffers, changeFavoriteOffer, changeOffer, restoreDetailedOffer, changeDetailedOffer, changeNearbyOffers, changeCity, sortOffers} = offersData.actions;
export default offersData;
