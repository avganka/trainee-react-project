import { combineReducers } from '@reduxjs/toolkit';
import  offersData  from './offers-data/offers-data';
import  userProcess  from './user-process/user-process';

export enum ReducersNames {
  data = 'DATA',
  offers = 'OFFERS',
  user = 'USER'
}

export const reducer = combineReducers({
  [ReducersNames.data]: offersData.reducer,
  [ReducersNames.user]: userProcess.reducer,
});

export type RootState = ReturnType<typeof reducer>;
