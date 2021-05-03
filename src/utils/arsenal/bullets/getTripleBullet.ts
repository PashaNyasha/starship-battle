import { TRIPLE_BULLETS } from "../../../constants/arsenal";
import { BLOCK_SIZE } from "../../../constants/canvas";
import { IBullet } from "../../../store/arsenal/interfaces";
import { ShipCoordinatesType } from "../../../types/ship";

export const getTripleBullet = ({
  shipX,
  shipY,
}: ShipCoordinatesType): IBullet => {
  const newY = (shipY + 10) - TRIPLE_BULLETS.bulletHeight;
  const newY3 = (shipY - 10) - TRIPLE_BULLETS.bulletHeight;

  return {
    ...TRIPLE_BULLETS,
    bulletX: shipX,
    bulletY: newY,
    bullet2X: shipX + BLOCK_SIZE - TRIPLE_BULLETS.bulletWidth,
    bullet2Y: newY,
    bullet3X: shipX + BLOCK_SIZE / 2 - TRIPLE_BULLETS.bulletWidth / 2,
    bullet3Y: newY3,
    bulletDmg: TRIPLE_BULLETS.bulletDmg,
  }
};
