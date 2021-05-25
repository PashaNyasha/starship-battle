import { createSelector } from "reselect";
import { StoreType } from "../store";
import { IEffectsStorage, IExplosion } from "./interfaces";
import { initialStateEffects } from "./slice";

const getEffectsStorageSelector = (store: StoreType) =>
  store.effects || initialStateEffects;

export const getExplosionEffectSelector = createSelector(
  [getEffectsStorageSelector],
  ({ explosion }: IEffectsStorage): IExplosion => explosion
);
