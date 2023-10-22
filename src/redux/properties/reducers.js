// Common:
export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, { error, payload }) => {
  state.isLoading = false;
  state.error = payload ?? error.message;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

// On success:

// Fetch properties
export const handleFetchFulfilled = (state, { payload }) => {
  state.items = payload;
};
