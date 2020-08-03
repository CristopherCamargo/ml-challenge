import initialState from "./init-state";

const setFetching = (state: LoadingStore, action: LoadingActionsTypes) => {
  if (action.type === "SET-FETCHING") {
    return {
      ...state,
      isFetching: action.payload
    };
  }
  return state;
};

const actions: Record<
  string,
  (state: LoadingStore, action: LoadingActionsTypes) => LoadingStore
> = {
  "SET-FETCHING": setFetching
};

const LoadingReducer = (
  state: LoadingStore = initialState,
  action: LoadingActionsTypes
): LoadingStore => {
  const handler = actions[action.type];

  if (typeof handler === "function") {
    return handler(state, action);
  }

  return state;
};

export default LoadingReducer;
