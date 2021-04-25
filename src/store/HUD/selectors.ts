import { createSelector } from "reselect";
import { StoreType } from "../store";
import { IHUDParams, IHUDStorage } from "./interfaces";
import { initialStateHUD } from "./slice";

const getHUDStorageSelector = (store: StoreType) =>
  store.HUD || initialStateHUD;

export const getHUDParamsSelector = createSelector(
  [getHUDStorageSelector],
  ({ hpCountTextX, hpBarWidth }: IHUDStorage): IHUDParams => ({
    hpCountTextX,
    hpBarWidth,
  })
);

export const getLifeGaugeWidthSelector = createSelector(
  [getHUDStorageSelector],
  ({ lifeGaugeWidth }: IHUDStorage): number => lifeGaugeWidth
);

export const getDamageWidthSelector = createSelector(
  [getHUDStorageSelector],
  ({ damageWidth }: IHUDStorage): number => damageWidth
);

export const getHotMeterSelector = createSelector(
  [getHUDStorageSelector],
  ({ hotMeter }: IHUDStorage): number => hotMeter
);

export const isHotSelector = createSelector(
  [getHUDStorageSelector],
  ({ isHot }: IHUDStorage): boolean => isHot
);

export const getScoreSelector = createSelector(
  [getHUDStorageSelector],
  ({ score }: IHUDStorage): number => score
);
