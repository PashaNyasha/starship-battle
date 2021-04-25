export interface IHUDParams {
  hpBarWidth: number;
  hpCountTextX: number;
}

export interface IHUDStorage extends IHUDParams {
  damageWidth: number;
  lifeGaugeWidth: number;
  hotMeter: number;
  isHot: boolean;
  score: number;
}