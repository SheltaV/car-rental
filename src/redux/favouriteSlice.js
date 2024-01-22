import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  likedAd: JSON.parse(localStorage.getItem('likedCars')) || [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleLikedAd: (state, action) => {
      const adId = action.payload;
      if (state.likedAd.includes(adId)) {
        state.likedAd = state.likedAd.filter(id => id !== adId);
      } else {
        state.likedAd.push(adId);
      }
      localStorage.setItem('likedCars', JSON.stringify(state.likedAd));
    },
  },
});

export const favoritesReducer = favoriteSlice.reducer;
export const { toggleLikedAd } = favoriteSlice.actions;