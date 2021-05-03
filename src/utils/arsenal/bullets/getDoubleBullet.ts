import { DOUBLE_BULLETS } from "../../../constants/arsenal";
import { BLOCK_SIZE } from "../../../constants/canvas";
import { IBullet } from "../../../store/arsenal/interfaces";
import { ShipCoordinatesType } from "../../../types/ship";

export const getDoubleBullet = ({
  shipX,
  shipY,
}: ShipCoordinatesType): IBullet => {
  const newY = (shipY + 10) - DOUBLE_BULLETS.bulletHeight;

  return {
    ...DOUBLE_BULLETS,
    bulletX: shipX,
    bulletY: newY,
    bullet2X: shipX + BLOCK_SIZE - DOUBLE_BULLETS.bulletWidth,
    bullet2Y: newY,
    bulletDmg: DOUBLE_BULLETS.bulletDmg,
  }
};
