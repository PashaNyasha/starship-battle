import { createSelector } from "reselect";
import { StoreType } from "../store";
import { IArsenalStorage, IBullet } from "./interfaces";
import { initialStateArsenal } from "./slice";

const getArsenalStorageSelector = (store: StoreType) =>
  store.arsenal || initialStateArsenal;

export const isShootingSelector = createSelector(
  [getArsenalStorageSelector],
  ({ isShooting }: IArsenalStorage): boolean => isShooting
);

export const getBulletsSelector = createSelector(
  [getArsenalStorageSelector],
  ({ bullets }: IArsenalStorage): IBullet[] => bullets
);