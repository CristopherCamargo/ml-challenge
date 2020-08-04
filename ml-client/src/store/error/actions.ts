export const setError = (payload: boolean): ErrorActionsTypes => ({
  type: "SET-ERROR",
  payload
});

export const clean = (): ErrorActionsTypes => ({
  type: "CLEAN"
});
