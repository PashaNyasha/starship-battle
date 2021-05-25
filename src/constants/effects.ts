import { IExplosion } from "../store/effects/interfaces";

export const DEFAULT_EXPLOSION: IExplosion = {
  spritesHorizontalCounter: 0,
  spritesVerticalCounter: 0,
  timeout: 0,
  tremorCounter: 0,
  isExplosion: true,
  hasTremor: true,
  isInit: true,
};
