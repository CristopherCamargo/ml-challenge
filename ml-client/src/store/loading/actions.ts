export const setFetching = (isFetching: boolean): LoadingActionsTypes => {
  return {
    type: "SET-FETCHING",
    payload: isFetching
  };
};
