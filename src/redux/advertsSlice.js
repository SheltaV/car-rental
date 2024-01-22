import { fetchPage, getByMake } from './operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  favorites: [],
  isLoading: false,
  error: null,
};

const advertsSlice = createSlice({
  name: 'adverts',
  initialState,
  reducers: {
    addFavorites: {
      reducer(state, action) {
        state.favorites.push(action.payload);
      },
    },
    removeFavorites: {
      reducer(state, action) {
        state.favorites = [
          ...state.favorites.filter(item => item.id !== action.payload),
        ];
      },
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchPage.fulfilled, (state, action) => {
      if (action.payload.page === 1) {
        state.items = action.payload.data;
      } else {
        state.items = [...state.items, ...action.payload.data];
      }
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getByMake.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchPage.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getByMake.pending, state => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchPage.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getByMake.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { addFavorites, removeFavorites } = advertsSlice.actions;
export const advertsReducer = advertsSlice.reducer;