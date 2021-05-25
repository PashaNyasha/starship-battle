import { SPECIAL_BULLETS } from "../../constants/arsenal";
import { ISpecialBullet } from "../../store/arsenal/interfaces";
import {
  SpecialBulletParamsType,
  SpecialBulletsNamesType,
} from "../../types/arsenal";
import { ShipCoordinatesType } from "../../types/ship";
import { getBall } from "./bullets/getBall";
import { getBomb } from "./bullets/getBomb";

type ParamsType = {
  specialVariantName: SpecialBulletsNamesType;
} & ShipCoordinatesType;

export const getSpecialBullet = ({
  specialVariantName,
  shipX,
  shipY,
}: ParamsType): SpecialBulletParamsType => {
  const selectedVariant: ISpecialBullet = SPECIAL_BULLETS[specialVariantName];

  switch (specialVariantName) {
    case "bomb":
      return {
        special: {
          ...selectedVariant,
          specialX: shipX,
          specialY: shipY - (selectedVariant.specialHeight + 5),
        },
        drawMethod: getBomb,
      };

    default:
      return {
        special: {
          ...selectedVariant,
          specialX: shipX + selectedVariant.radius,
          specialY: shipY - (selectedVariant.radius + 5),
        },
        drawMethod: getBall,
      };
  }
};
