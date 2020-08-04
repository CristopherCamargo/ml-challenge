type ErrorActionsTypes =
  | {
      type: "SET-ERROR";
      payload: boolean;
    }
  | {
      type: "CLEAN";
    };
