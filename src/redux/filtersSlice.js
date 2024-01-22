import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  brand: null,
  price: null,
  mileageFrom: null,
  mileageTo: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: {
      reducer(state, action) {
        return { ...state, ...action.payload };
      },
    },
  },
});

export const { setFilters } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;