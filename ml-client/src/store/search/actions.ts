export const setText = (text: string): SearchActionsTypes => ({
  type: "SET-TEXT",
  payload: text
});

export const clean = (): SearchActionsTypes => ({
  type: "CLEAN"
});
