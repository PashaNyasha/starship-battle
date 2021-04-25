import { IAlien } from "../../store/aliens/interfaces";
import { IBullet } from "../../store/arsenal/interfaces";

interface IParams {
  bulletX: number;
  bulletY: number;
  alienX: number;
  alienY: number;
  alienSize: number;
}

export const confirmHitToAlien = ({
  bulletX,
  bulletY,
  alienX,
  alienY,
  alienSize,
}: IParams) => {
  const isBulletInY = bulletY >= alienY && bulletY <= alienY + alienSize;
  const isBulletInX = bulletX >= alienX && bulletX <= alienX + alienSize;

  return isBulletInY && isBulletInX;
};
