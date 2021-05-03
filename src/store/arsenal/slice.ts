import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SINGLE_SHOOT, TURBO_FAST_SHOOT_SPEED } from "../../constants/arsenal";
import { ShootVariantNameType } from "../../types/arsenal";
import { IArsenalStorage, IBullet } from "./interfaces";

export const initialStateArsenal: IArsenalStorage = {
  isShooting: false,
  bullets: [],
  shootSpeed: TURBO_FAST_SHOOT_SPEED,
  shootVariant: SINGLE_SHOOT,
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
    setShootSpeedAction: (state, { payload }: PayloadAction<number>) => {
      state.shootSpeed = payload;
    },
    setShootVariantAction: (
      state,
      { payload }: PayloadAction<ShootVariantNameType>
    ) => {
      state.shootVariant = payload;
    },
  },
});

const { reducer: arsenalReducer, actions: arsenalActions } = slice;

export const {
  setIsShootingAction,
  setBulletsAction,
  setShootSpeedAction,
  setShootVariantAction,
} = arsenalActions;

export { arsenalReducer, arsenalActions };
