import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProperties } from 'services/api';

export const fetchPropertiesOp = createAsyncThunk(
  `properties/fetch`,
  async (_, { rejectWithValue }) => {
    try {
      return await fetchProperties();
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);
