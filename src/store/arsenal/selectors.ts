import { createSelector } from "reselect";
import { ShootVariantNameType, SpecialBulletsNamesType } from "../../types/arsenal";
import { StoreType } from "../store";
import { IArsenalStorage, IBullet, SpecialShootType } from "./interfaces";
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

export const isSpecialShootingSelector = createSelector(
  [getArsenalStorageSelector],
  ({ isSpecialShoot }: IArsenalStorage): boolean => isSpecialShoot
);

export const getSpecialBulletsSelector = createSelector(
  [getArsenalStorageSelector],
  ({ special }: IArsenalStorage): SpecialShootType => special
);

export const getSpecialVariantNameSelector = createSelector(
  [getArsenalStorageSelector],
  ({ specialVariant }: IArsenalStorage): SpecialBulletsNamesType => specialVariant
);
