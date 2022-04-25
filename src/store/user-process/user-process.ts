import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStatus } from '../../const';
import { UserEmail } from '../../types/login';
import { UserProcess } from '../../types/state';

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  userEmail: null,
};

export const userProcess = createSlice({
  name: 'userProcess',
  initialState: initialState,
  reducers: {
    requireAuthorization (state, action: PayloadAction<AuthStatus>) {
      state.authorizationStatus = action.payload;
    },
    requireLogout (state) {
      state.authorizationStatus = AuthStatus.NoAuth;
    },
    fetchUserEmail (state, action: PayloadAction<UserEmail>) {
      state.userEmail = action.payload;
    },
  },
});

export default userProcess;
export const {requireAuthorization, requireLogout, fetchUserEmail} = userProcess.actions;
