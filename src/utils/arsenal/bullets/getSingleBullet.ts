import { SINGLE_BULLET } from "../../../constants/arsenal";
import { BLOCK_SIZE } from "../../../constants/canvas";
import { IBullet } from "../../../store/arsenal/interfaces";
import { ShipCoordinatesType } from "../../../types/ship";

export const getSingleBullet = ({
  shipX,
  shipY,
}: ShipCoordinatesType): IBullet => ({
  ...SINGLE_BULLET,
  bulletX: shipX + BLOCK_SIZE / 2 - SINGLE_BULLET.bulletWidth / 2,
  bulletY: (shipY + 10) - SINGLE_BULLET.bulletHeight,
  bulletDmg: 20,
});
