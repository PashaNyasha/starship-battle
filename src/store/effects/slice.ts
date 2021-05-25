import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IExplosion, IEffectsStorage } from "./interfaces";
import { DEFAULT_EXPLOSION } from "../../constants/effects";

export const initialStateEffects: IEffectsStorage = {
  explosion: DEFAULT_EXPLOSION,
};

const slice = createSlice({
  name: "effectsReducer",
  initialState: initialStateEffects,
  reducers: {
    setExplosionEffectAction: (
      state,
      { payload }: PayloadAction<IExplosion>
    ) => {
      state.explosion = payload;
    },
  },
});

export const { reducer: effectsReducer } = slice;

export const { setExplosionEffectAction } = slice.actions;
