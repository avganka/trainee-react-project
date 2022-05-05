import { createSelector } from '@reduxjs/toolkit';
import { State } from '../../types/state';

const getOffers = (state: State) => state.DATA.offers;

export const selectOffers = createSelector(getOffers, (item) => console.log(item));

