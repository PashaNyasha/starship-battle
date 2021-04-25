import { createSelector } from "reselect";
import { StoreType } from "../store";
import { IAlien, IAliensStorage } from "./interfaces";
import { initialStateAliens } from "./slice";

const getAliensStorageSelector = (store: StoreType) =>
  store.aliens || initialStateAliens;

export const getWallSelector = createSelector(
  [getAliensStorageSelector],
  ({ wall }: IAliensStorage): IAlien[] => wall
);
