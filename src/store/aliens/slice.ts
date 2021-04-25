import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlien, IAliensStorage } from "./interfaces";
import { createAliensWall } from "../../utils/aliens/createAliensWall";

export const initialStateAliens: IAliensStorage = {
  wall: createAliensWall({
    count: 24,
    alienY: -150,
    alienHp: 150,
    alienSize: 50,
    scoreNumber: 10,
    alienX: 50,
  }),
  row: [],
  snake: [],
};

const slice = createSlice({
  name: "aliensReducer",
  initialState: initialStateAliens,
  reducers: {
    setWallAction: (state, { payload }: PayloadAction<IAlien[]>) => {
      state.wall = payload;
    },
  },
});

const { reducer: alienslReducer, actions: alienslActions } = slice;

export const { setWallAction } = alienslActions;

export { alienslReducer, alienslActions };
