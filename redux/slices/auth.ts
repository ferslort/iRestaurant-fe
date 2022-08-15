import { createSlice } from '@reduxjs/toolkit';

export interface InitialState {
  user: undefined | null | object;
  auth: undefined | boolean;
  token: undefined | string;
}

const initialState = {
  user: null,
  auth: false,
  token: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthUser: (state, action) => {
      state.auth = true;
      state.user = action.payload ? action.payload : null;
    },
    setTokenUser: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.auth = false;
    }
  }
});

export const { setAuthUser, logout, setTokenUser } = authSlice.actions;

export const sliceAuth = authSlice.reducer;
