import { batchActions } from "redux-batched-actions";
import { DOUBLE_SHOOT, SHOOT_VARIANTS_LIST, SINGLE_SHOOT, TRIPLE_SHOOT } from "../constants/arsenal";
import { KEY_CODES } from "../constants/keyCodes";
import {
  setIsShootingAction,
  setShootVariantAction,
} from "../store/arsenal/slice";
import {
  setHpDamageWidthAction,
  setLifeGaugeWidthAction,
} from "../store/HUD/slice";
import {
  setShipHpAction,
  setShipisDownAction,
  setShipisLeftAction,
  setShipisRightAction,
  setShipisUpAction,
} from "../store/ship/slice";
import { dispatch } from "../store/store";
import { getHPDamage } from "./HUD/hp/getHPDamage";

type ParamsType = {
  event: KeyboardEvent;
  isKeydown: boolean;
};

export const getPressedKey = ({ event: { code }, isKeydown }: ParamsType) => {
  switch (code) {
    case KEY_CODES.ARROW_UP:
    case KEY_CODES.W: {
      dispatch(setShipisUpAction(isKeydown));
      break;
    }

    case KEY_CODES.ARROW_LEFT:
    case KEY_CODES.A: {
      dispatch(setShipisLeftAction(isKeydown));
      break;
    }

    case KEY_CODES.ARROW_DOWN:
    case KEY_CODES.S: {
      dispatch(setShipisDownAction(isKeydown));
      break;
    }

    case KEY_CODES.ARROW_RIGHT:
    case KEY_CODES.D: {
      dispatch(setShipisRightAction(isKeydown));
      break;
    }

    case KEY_CODES.SPACE: {
      dispatch(setIsShootingAction(isKeydown));
      break;
    }

    case KEY_CODES.Digit1: {
      dispatch(setShootVariantAction(SINGLE_SHOOT));
      break;
    }

    case KEY_CODES.Digit2: {
      dispatch(setShootVariantAction(DOUBLE_SHOOT));
      break;
    }

    case KEY_CODES.Digit3: {
      dispatch(setShootVariantAction(TRIPLE_SHOOT));
      break;
    }
 
    // Todo удалить
    case "KeyL": {
      const { hp, damageWidth, lifeGaugeWidth } = getHPDamage({});

      dispatch(
        batchActions([
          setShipHpAction(hp),
          setHpDamageWidthAction(damageWidth),
          setLifeGaugeWidthAction(lifeGaugeWidth),
        ])
      );
      break;
    }
    default:
      return;
  }
};
