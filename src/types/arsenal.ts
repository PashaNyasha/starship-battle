import { DOUBLE_SHOOT, SINGLE_SHOOT, TRIPLE_SHOOT } from "../constants/arsenal";
import { IBullet } from "../store/arsenal/interfaces";
import { StoreType } from "../store/store";
import { ColorsType } from "./colors";
import { ShipCoordinatesType } from "./ship";

type ShootFunc = (state: StoreType) => void;

export type ShootVariantsType = {
  [SINGLE_SHOOT]: ShootFunc;
  [DOUBLE_SHOOT]: ShootFunc;
  [TRIPLE_SHOOT]: ShootFunc;
};

export type DrawBulletType = {
  x: number;
  y: number;
  width: number;
  height: number;
  color: ColorsType;
  shadowColor?: ColorsType;
  shadowBlur?: number;
  lineWidth?: number;
  isNeedStroke?: boolean;
  x2?: number;
  y2?: number;
  x3?: number;
  y3?: number;
};

export type DrawBulletUtilType = (params: DrawBulletType) => void;

export type ShootVariantNameType =
  | typeof SINGLE_SHOOT
  | typeof DOUBLE_SHOOT
  | typeof TRIPLE_SHOOT;

export type GetShootVarintType = (params: ShipCoordinatesType) => IBullet;

export type BulletVariantsType = {
  singleShoot: GetShootVarintType;
  doubleShoot: GetShootVarintType;
  tripleShoot: GetShootVarintType;
};
