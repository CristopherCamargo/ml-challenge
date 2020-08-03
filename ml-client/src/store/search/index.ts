import initialState from "./init-state";

const setText = (state: SearchStore, action: SearchActionsTypes) => {
  if (action.type === "SET-TEXT") {
    return {
      ...state,
      text: action.payload
    };
  }
  return state;
};

const clean = (state: SearchStore) => state;

const actions: Record<
  string,
  (state: SearchStore, action: SearchActionsTypes) => SearchStore
> = {
  "SET-TEXT": setText,
  CLEAN: clean
};

const SearchReducer = (
  state: SearchStore = initialState,
  action: SearchActionsTypes
): SearchStore => {
  const handler = actions[action.type];

  if (typeof handler === "function") {
    return handler(state, action);
  }

  return state;
};

export default SearchReducer;
