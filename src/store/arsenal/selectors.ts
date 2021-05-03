import { createSelector } from "reselect";
import { ShootVariantNameType } from "../../types/arsenal";
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

export const getShootSpeedSelector = createSelector(
  [getArsenalStorageSelector],
  ({ shootSpeed }: IArsenalStorage): number => shootSpeed
);

export const getShootVariantSelector = createSelector(
  [getArsenalStorageSelector],
  ({ shootVariant }: IArsenalStorage): ShootVariantNameType => shootVariant
);
