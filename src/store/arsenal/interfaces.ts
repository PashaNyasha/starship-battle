import { ShootVariantNameType } from "../../types/arsenal";
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

export interface IArsenalStorage {
  isShooting: boolean;
  bullets: IBullet[];
  shootSpeed: number;
  shootVariant: ShootVariantNameType;
}
