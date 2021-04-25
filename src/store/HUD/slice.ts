import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { HOT_METER_BY_LVL } from "../../constants/ship";
import { IHUDParams, IHUDStorage } from "./interfaces";

export const initialStateHUD: IHUDStorage = {
  hpBarWidth: 350,
  hpCountTextX: 300,
  damageWidth: 0,
  lifeGaugeWidth: 350,
  hotMeter: 0,
  isHot: false,
  score: 0,
};

const slice = createSlice({
  name: "HUDReducer",
  initialState: initialStateHUD,
  reducers: {
    setHPBarWidthAction: (state, { payload }: PayloadAction<number>) => {
      state.hpBarWidth = payload;
      state.lifeGaugeWidth = payload;
    },
    setHPCountTextXAction: (state, { payload }: PayloadAction<number>) => {
      state.hpCountTextX = payload;
    },
    setHUDParamsAction: (state, { payload }: PayloadAction<IHUDParams>) => {
      state.hpBarWidth = payload.hpBarWidth;
      state.hpCountTextX = payload.hpCountTextX;
    },
    setLifeGaugeWidthAction: (state, { payload }: PayloadAction<number>) => {
      state.lifeGaugeWidth = payload;
    },
    setHpDamageWidthAction: (state, { payload }: PayloadAction<number>) => {
      state.damageWidth = payload;
    },
    setHotMeterAction: (state, { payload }: PayloadAction<number>) => {
      state.hotMeter = payload;
    },
    setIsHotAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isHot = payload;
    },
    setScoreAction: (state, { payload }: PayloadAction<number>) => {
      state.score = payload;
    },
  },
});

const { reducer: HUDReducer, actions: HUDActions } = slice;

export const {
  setHPBarWidthAction,
  setHPCountTextXAction,
  setHUDParamsAction,
  setHpDamageWidthAction,
  setLifeGaugeWidthAction,
  setHotMeterAction,
  setIsHotAction,
  setScoreAction,
} = HUDActions;

export { HUDReducer, HUDActions };
