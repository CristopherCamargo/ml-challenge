const getInitial = (state: ReduxStore) => {
  return state.error;
};

export const getError = (state: ReduxStore) => {
  return getInitial(state).isError;
};
