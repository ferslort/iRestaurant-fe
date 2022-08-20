import { createSlice } from '@reduxjs/toolkit';
import { Restaurant } from '../../types/restaurant';

export interface InitialState {
  restaurant: Restaurant | null;
}

const initialState: InitialState = {
  restaurant: null
};

export const restaurantSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload ? action.payload : null;
    }
  }
});

export const { setRestaurant } = restaurantSlice.actions;

export const sliceRestaurant = restaurantSlice.reducer;
