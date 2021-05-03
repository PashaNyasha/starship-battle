import { IBullet } from "../store/arsenal/interfaces";
import { BulletVariantsType, ShootVariantNameType } from "../types/arsenal";
import { getDoubleBullet } from "../utils/arsenal/bullets/getDoubleBullet";
import { getSingleBullet } from "../utils/arsenal/bullets/getSingleBullet";
import { getTripleBullet } from "../utils/arsenal/bullets/getTripleBullet";

export const NORMAL_SHOOT_SPEED = 35;
export const FAST_SHOOT_SPEED = 20;
export const TURBO_FAST_SHOOT_SPEED = 10;

export const SINGLE_SHOOT = "SINGLE_SHOOT";
export const DOUBLE_SHOOT = "DOUBLE_SHOOT";
export const TRIPLE_SHOOT = "TRIPLE_SHOOT";

export const SINGLE_BULLET: IBullet = {
  bulletWidth: 4,
  bulletHeight: 15,
  bulletX: 0,
  bulletY: 0,
  bulletDmg: 20,
};

export const DOUBLE_BULLETS: IBullet = {
  ...SINGLE_BULLET,
  bullet2X: 0,
  bullet2Y: 0,
};

export const TRIPLE_BULLETS: IBullet = {
  ...DOUBLE_BULLETS,
  bullet3X: 0,
  bullet3Y: 0,
};

export const BULLET_VARIANTS: BulletVariantsType = {
  singleShoot: getSingleBullet,
  doubleShoot: getDoubleBullet,
  tripleShoot: getTripleBullet,
};
