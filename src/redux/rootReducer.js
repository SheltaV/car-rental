import { combineReducers } from '@reduxjs/toolkit';
import { advertsReducer } from '../redux/adSlice';
import { favoritesReducer } from '../redux/favoriteSlice';
import { filterReducer } from '../redux/filterSlice';

export const rootReducer = combineReducers({
  adverts: advertsReducer,
  filter: filterReducer,
  favorites: favoritesReducer,
});