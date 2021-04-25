import {
  ORANGE_COLOR,
  ORANGE_RED_COLOR,
  RED_COLOR,
} from "../../../constants/colors";
import { CIRCLE_270_DEGREE } from "../../../constants/HUD";

export const getHotColor = (hotMeter: number): string => {
  if (hotMeter > CIRCLE_270_DEGREE) {
    return RED_COLOR;
  }

  if (hotMeter > 90) {
    return ORANGE_RED_COLOR;
  }

  return ORANGE_COLOR;
};
