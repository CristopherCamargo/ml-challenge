const getInitial = (state: ReduxStore) => {
  return state.loading;
};

export const getLoading = (state: ReduxStore) => {
  return getInitial(state).isFetching;
};
