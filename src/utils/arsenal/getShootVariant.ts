import {
  BULLET_VARIANTS,
  DOUBLE_SHOOT,
  TRIPLE_SHOOT,
} from "../../constants/arsenal";
import { IBullet } from "../../store/arsenal/interfaces";
import { GetShootVarintType, ShootVariantNameType } from "../../types/arsenal";
import { ShipCoordinatesType } from "../../types/ship";

type ParamsType = {
  shootVariant: ShootVariantNameType;
} & ShipCoordinatesType;

export const getShootVariant = ({
  shootVariant,
  shipX,
  shipY,
}: ParamsType): IBullet => {
  let method: GetShootVarintType;

  switch (shootVariant) {
    case DOUBLE_SHOOT:
      method = BULLET_VARIANTS.doubleShoot;
      break;

    case TRIPLE_SHOOT:
      method = BULLET_VARIANTS.tripleShoot;
      break;

    default:
      method = BULLET_VARIANTS.singleShoot;
      break;
  }

  return method({ shipX, shipY });
};
