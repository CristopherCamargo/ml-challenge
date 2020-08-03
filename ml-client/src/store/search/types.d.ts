type SearchActionsTypes =
  | {
      type: "SET-TEXT";
      payload: string;
    }
  | {
      type: "CLEAN";
    };
