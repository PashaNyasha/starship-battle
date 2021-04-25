import { batchActions } from "redux-batched-actions";
import { setIsShootingAction } from "../store/arsenal/slice";
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

const ARROW_UP = "ArrowUp";
const ARROW_LEFT = "ArrowLeft";
const ARROW_DOWN = "ArrowDown";
const ARROW_RIGHT = "ArrowRight";
const SPACE = "Space";

const W = "KeyW";
const A = "KeyA";
const S = "KeyS";
const D = "KeyD";

type ParamsType = {
  event: KeyboardEvent;
  isKeydown: boolean;
};

export const getPressedKey = ({ event: { code }, isKeydown }: ParamsType) => {
  switch (code) {
    case ARROW_UP:
    case W: {
      dispatch(setShipisUpAction(isKeydown));
      break;
    }

    case ARROW_LEFT:
    case A: {
      dispatch(setShipisLeftAction(isKeydown));
      break;
    }

    case ARROW_DOWN:
    case S: {
      dispatch(setShipisDownAction(isKeydown));
      break;
    }

    case ARROW_RIGHT:
    case D: {
      dispatch(setShipisRightAction(isKeydown));
      break;
    }

    case SPACE: {
      dispatch(setIsShootingAction(isKeydown));
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
