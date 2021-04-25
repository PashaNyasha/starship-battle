import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlien, IAliensStorage } from "./interfaces";

export const initialStateAliens: IAliensStorage = {
  aliens: [],
};

const slice = createSlice({
  name: "aliensReducer",
  initialState: initialStateAliens,
  reducers: {
    setIsAliensAction: (state, { payload }: PayloadAction<IAlien[]>) => {
      state.aliens = payload;
    },
  },
});

const { reducer: alienslReducer, actions: alienslActions } = slice;

export const { setIsAliensAction } = alienslActions;

export { alienslReducer, alienslActions };
