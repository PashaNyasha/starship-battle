import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {  SINGLE_SHOOT, TURBO_FAST_SHOOT_SPEED } from "../../constants/arsenal";
import { ShootVariantNameType, SpecialBulletsNamesType } from "../../types/arsenal";
import { IArsenalStorage, IBullet, SpecialShootType } from "./interfaces";

export const initialStateArsenal: IArsenalStorage = {
  isShooting: false,
  isSpecialShoot: false,
  bullets: [],
  special: null,
  shootSpeed: TURBO_FAST_SHOOT_SPEED,
  shootVariant: SINGLE_SHOOT,
  specialVariant: 'bomb',
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
    setIsSpecialShootAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isSpecialShoot = payload;
    },
    setSpecialBulletAction: (state, { payload }: PayloadAction<SpecialShootType>) => {
      state.special = payload;
    },
    setSpecialVariantNameAction: (state, { payload }: PayloadAction<SpecialBulletsNamesType>) => {
      state.specialVariant = payload;
    },
  },
});

const { reducer: arsenalReducer, actions: arsenalActions } = slice;

export const {
  setIsShootingAction,
  setBulletsAction,
  setShootSpeedAction,
  setShootVariantAction,
  setIsSpecialShootAction,
  setSpecialBulletAction,
  setSpecialVariantNameAction,
} = arsenalActions;

export { arsenalReducer, arsenalActions };
