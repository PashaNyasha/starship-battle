import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SHIP_SPEED_VARIANTS } from "../../constants/ship";
import { IShipStorage, ShipLevelsType } from "./interfaces";

export const initialStateShip: IShipStorage = {
  shipLevel: 'level1',
  speed: SHIP_SPEED_VARIANTS.normal,
  shipX: 50,
  shipY: 50,
  isUp: false,
  isLeft: false,
  isDown: false,
  isRight: false,
  hp: 100,
  speedMeter: 100,
};

const slice = createSlice({
  name: "shipReducer",
  initialState: initialStateShip,
  reducers: {
    setShipLevelAction: (state, { payload }: PayloadAction<ShipLevelsType>) => {
      state.shipLevel = payload;
    },
    setSpeedtAction: (state, { payload }: PayloadAction<number>) => {
      state.speed = payload;
    },
    setShipXAction: (state, { payload }: PayloadAction<number>) => {
      state.shipX = payload;
    },
    setShipYAction: (state, { payload }: PayloadAction<number>) => {
      state.shipY = payload;
    },
    setShipisUpAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isUp = payload;
    },
    setShipisLeftAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isLeft = payload;
    },
    setShipisDownAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isDown = payload;
    },
    setShipisRightAction: (state, { payload }: PayloadAction<boolean>) => {
      state.isRight = payload;
    },
    setShipHpAction: (state, { payload }: PayloadAction<number>) => {
      state.hp = payload;
    },
    setShipSpeedMeterAction: (state, { payload }: PayloadAction<number>) => {
      state.hp = payload;
    },
  },
});

const { reducer: shipReducer, actions: shipActions } = slice;

export const {
  setShipisUpAction,
  setShipisLeftAction,
  setShipisDownAction,
  setShipisRightAction,
  setShipXAction,
  setShipHpAction,
  setShipLevelAction,
  setShipSpeedMeterAction,
  setShipYAction,
  setSpeedtAction
} = shipActions;

export { shipReducer, shipActions };
