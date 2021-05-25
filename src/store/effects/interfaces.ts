export interface IExplosion {
  spritesHorizontalCounter: number;
  spritesVerticalCounter: number;
  timeout: number;
  tremorCounter: number;
  isExplosion: boolean;
  hasTremor: boolean;
  isInit: boolean;
}

export interface IEffectsStorage {
  explosion: IExplosion;
}

