import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/deals/operations';
import * as rds from 'redux/deals/reducers';

// ################################################

const extraActions = [
  ops.fetchDeals,
  ops.addContact,
  ops.deleteContact,
  ops.editContact,
];

const dealsSlice = createSlice({
  name: 'deals',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentId: null,
  },
  reducers: {
    setSelectedContactId(state, { payload }) {
      state.currentId = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(ops.fetchDeals.fulfilled, rds.handleFetchFulfilled)
      .addCase(ops.addContact.fulfilled, rds.handleAddFulfilled)
      .addCase(ops.deleteContact.fulfilled, rds.handleDeleteFulfilled)
      .addCase(ops.editContact.fulfilled, rds.handleEditFulfilled)
      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});

export const { setSelectedContactId } = dealsSlice.actions;
export const dealsReducer = dealsSlice.reducer;
