import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

function generateOperation(type) {
  //
  function payloadCreator(type) {
    const statement = type === 'fetch' ? `${type}Contacts` : `${type}Contact`;

    return async (arg, { rejectWithValue }) => {
      try {
        return await api[statement](arg ? arg : '');
      } catch (error) {
        return rejectWithValue(error.response.statusText);
      }
    };
  }
  //
  return createAsyncThunk(`deals/${type}`, payloadCreator(type));
}

export const fetchDeals = generateOperation('fetch');
export const addContact = generateOperation('add');
export const deleteContact = generateOperation('delete');
export const editContact = generateOperation('edit');
