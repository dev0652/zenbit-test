import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/properties/operations';
import * as rds from 'redux/properties/reducers';

// ################################################

const extraActions = [ops.fetchPropertiesOp];

const propertiesSlice = createSlice({
  name: 'properties',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder =>
    builder
      .addCase(ops.fetchPropertiesOp.fulfilled, rds.handleFetchFulfilled)
      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});

export const { setSelectedContactId } = propertiesSlice.actions;
export const propertiesReducer = propertiesSlice.reducer;
