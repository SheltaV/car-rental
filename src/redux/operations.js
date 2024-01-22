import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://65ae57a01dfbae409a749b34.mockapi.io';

export const fetchPage = createAsyncThunk(
  'adverts/fetchPage',
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/adverts?page=${page}&limit=${limit}`
      );
      return { data: response.data, page };
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const getByMake = createAsyncThunk(
  'adverts/getByMake',
  async ({ brand, price, mileageFrom, mileageTo }, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/adverts?make=${brand || ''}`
      );
      const result = response.data.filter(({ rentalPrice, mileage }) => {
        return (
          (!price ||
            parseInt(rentalPrice.replace(/\D/g, '')) <= parseInt(price)) &&
          (!mileageFrom || mileage >= parseInt(mileageFrom)) &&
          (!mileageTo || mileage <= parseInt(mileageTo))
        );
      });

      return result;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);