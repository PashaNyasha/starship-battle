import { createSelector } from "reselect";
import { ShipCoordinatesType } from "../../types/ship";
import { StoreType } from "../store";
import { IShipStorage, ShipLevelsType } from "./interfaces";
import { initialStateShip } from "./slice";

const getShipStorageSelector = (store: StoreType) =>
  store.ship || initialStateShip;

export const getShipLevelSelector = createSelector(
  [getShipStorageSelector],
  ({ shipLevel }: IShipStorage): ShipLevelsType => shipLevel
);

export const getShipSpeedSelector = createSelector(
  [getShipStorageSelector],
  ({ speed }: IShipStorage): number => speed
);

export const getShipXSelector = createSelector(
  [getShipStorageSelector],
  ({ shipX }: IShipStorage): number => shipX
);

export const getShipYSelector = createSelector(
  [getShipStorageSelector],
  ({ shipY }: IShipStorage): number => shipY
);

export const getShipCoordinatesSelector = createSelector(
  [getShipXSelector, getShipYSelector],
  (shipX: number, shipY: number): ShipCoordinatesType => ({ shipX, shipY })
);

export const isShipUpSelector = createSelector(
  [getShipStorageSelector],
  ({ isUp }: IShipStorage): boolean => isUp
);

export const isShipLeftSelector = createSelector(
  [getShipStorageSelector],
  ({ isLeft }: IShipStorage): boolean => isLeft
);

export const isShipDownSelector = createSelector(
  [getShipStorageSelector],
  ({ isDown }: IShipStorage): boolean => isDown
);

export const isShipRightSelector = createSelector(
  [getShipStorageSelector],
  ({ isRight }: IShipStorage): boolean => isRight
);

export const getShipHPSelector = createSelector(
  [getShipStorageSelector],
  ({ hp }: IShipStorage): number => hp
);

export const getShipSpeedMeterSelector = createSelector(
  [getShipStorageSelector],
  ({ speedMeter }: IShipStorage): number => speedMeter
);
