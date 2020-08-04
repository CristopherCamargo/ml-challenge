import initialState from "./init-state";

const setError = (state: ErrorStore, action: ErrorActionsTypes): ErrorStore => {
  if (action.type === "SET-ERROR") {
    return {
      ...state,
      isError: action.payload
    };
  }
  return state;
};

const clean = () => initialState;

const actions: Record<
  string,
  (state: ErrorStore, action: ErrorActionsTypes) => ErrorStore
> = {
  "SET-ERROR": setError,
  CLEAN: clean
};

const ErrorReducer = (
  state: ErrorStore = initialState,
  action: ErrorActionsTypes
): ErrorStore => {
  const handler = actions[action.type];

  if (typeof handler === "function") {
    return handler(state, action);
  }

  return state;
};

export default ErrorReducer;
