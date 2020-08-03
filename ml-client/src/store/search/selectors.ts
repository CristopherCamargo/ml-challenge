const getInitial = (state: ReduxStore) => {
  return state.search;
};

export const getText = (state: ReduxStore) => {
  return getInitial(state).text;
};
