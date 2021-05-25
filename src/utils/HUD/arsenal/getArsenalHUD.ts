import { ctx } from "../../..";
import {
  ORANGE_COLOR,
  ORANGE_RED_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../../constants/colors";
import { DEGREE_360 } from "../../../constants/common";
import { FULL_CIRCLE_DEGREE } from "../../../constants/HUD";
import {
  getHotMeterSelector,
  isHotSelector,
} from "../../../store/HUD/selectors";
import { StoreType } from "../../../store/store";
import { getDegree } from "../../getDegree";
import { checkIsTimeToRed } from "./checkIsTimeToRed";
import { getHotColor } from "./getHotColor";

const COORDINATE = 100;
const FONT = "10px Zen-dots";

export const getArsenalHUD = (
  state: StoreType,
  canvasWidth: number,
  canvasHeight: number
) => {
  const hotMeter = getHotMeterSelector(state);
  const isHot = isHotSelector(state);
  ctx.lineWidth = 4;

  // Circle
  ctx.strokeStyle = WHITE_COLOR;
  ctx.beginPath();
  ctx.arc(
    canvasWidth - COORDINATE,
    canvasHeight - COORDINATE,
    70,
    0,
    DEGREE_360
  );
  ctx.stroke();

  // HOT
  ctx.strokeStyle = getHotColor(hotMeter);
  ctx.beginPath();
  ctx.arc(
    canvasWidth - COORDINATE,
    canvasHeight - COORDINATE,
    70,
    0,
    getDegree(hotMeter)
  );

  ctx.stroke();

  const cX = canvasWidth - COORDINATE - 15;
  const cY = canvasHeight - COORDINATE - 20;

  // Bullets
  if (!isHot) {
    ctx.fillStyle = YELLOW_COLOR;
    ctx.fillRect(cX, cY, 30, 30);
    ctx.font = FONT;
    ctx.fillText("DEFAULT", cX - 13, cY + 50);
  } else {
    ctx.font = "bold 30px Zen-dots";
    const isRed = checkIsTimeToRed();
    ctx.fillStyle = isRed ? ORANGE_COLOR : ORANGE_RED_COLOR;
    ctx.fillText("H 0 T", cX - 40, cY + 34);
  }
};
