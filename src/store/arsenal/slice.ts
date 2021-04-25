import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IArsenalStorage, IBullet } from "./interfaces";

export const initialStateArsenal: IArsenalStorage = {
  isShooting: false,
  bullets: [],
};

const slice = createSlice({
  name: "arsenalReducer",
  initialState: initialStateArsenal,
  reducers: {
    setIsShootingAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isShooting = payload;
    },
    setBulletsAction: (state, { payload }: PayloadAction<IBullet[]>) => {
      state.bullets = payload;
    },
  },
});

const { reducer: arsenalReducer, actions: arsenalActions } = slice;

export const { setIsShootingAction, setBulletsAction } = arsenalActions;

export { arsenalReducer, arsenalActions };
