import { ctx } from "../../..";
import {
  ORANGE_COLOR,
  ORANGE_RED_COLOR,
  WHITE_COLOR,
  YELLOW_COLOR,
} from "../../../constants/colors";
import { FULL_CIRCLE_DEGREE } from "../../../constants/HUD";
import {
  getHotMeterSelector,
  isHotSelector,
} from "../../../store/HUD/selectors";
import { StoreType } from "../../../store/store";
import { checkIsTimeToRed } from "./checkIsTimeToRed";
import { getHotColor } from "./getHotColor";

const COORDINATE = 100;

const getRadians = (degress: number) => (Math.PI / 180) * degress;

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
    50,
    0,
    getRadians(FULL_CIRCLE_DEGREE)
  );
  ctx.stroke();

  // HOT
  ctx.strokeStyle = getHotColor(hotMeter);
  ctx.beginPath();
  ctx.arc(
    canvasWidth - COORDINATE,
    canvasHeight - COORDINATE,
    50,
    0,
    getRadians(hotMeter)
  );

  ctx.stroke();

  const cX = canvasWidth - COORDINATE - 15;
  const cY = canvasHeight - COORDINATE - 20;

  // Bullets
  if (!isHot) {
    ctx.fillStyle = YELLOW_COLOR;
    ctx.fillRect(cX, cY, 30, 30);
    ctx.fillText("Default", cX - 3, cY + 50);
  } else {
    ctx.font = "bold 35px Antonio";
    const isRed = checkIsTimeToRed();
    ctx.fillStyle = isRed ? ORANGE_COLOR : ORANGE_RED_COLOR;
    ctx.fillText("H O T", cX - 15, cY + 34);
  }
};
