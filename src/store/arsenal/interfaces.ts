import {
  ShootVariantNameType,
  SpecialBulletsNamesType,
} from "../../types/arsenal";
import { ColorsType } from "../../types/colors";

export interface IBullet {
  bulletX: number;
  bulletY: number;
  bullet2X?: number;
  bullet2Y?: number;
  bullet3X?: number;
  bullet3Y?: number;
  bulletWidth: number;
  bulletHeight: number;
  bulletDmg: number;
  bulletImageSrc?: string;
  shadowColor?: ColorsType;
  lineWidth?: number;
  isNeedStroke?: boolean;
}

export interface ISpecialBullet {
  specialX: number;
  specialY: number;
  specialDmg: number;
  isInit?: boolean;
  specialWidth?: number;
  specialHeight?: number;
  radius?: number;
  dX?: number;
  dY?: number;
}

export type SpecialShootType = ISpecialBullet | null;

export interface IArsenalStorage {
  isShooting: boolean;
  isSpecialShoot: boolean;
  bullets: IBullet[];
  special: SpecialShootType;
  shootSpeed: number;
  shootVariant: ShootVariantNameType;
  specialVariant: SpecialBulletsNamesType | null;
}
