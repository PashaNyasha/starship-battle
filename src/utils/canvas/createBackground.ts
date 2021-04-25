import { ctx } from "../..";
import { BLACK_COLOR, WHITE_COLOR } from "../../constants/colors";
import { ICanvasSize } from "../../store/canvas/interfaces";
import { getShipSpeedSelector } from "../../store/ship/selectors";
import { StoreType } from "../../store/store";

const getRand = (size: number) => Math.floor(Math.random() * size);

type ParamsType = {
  state: StoreType;
} & ICanvasSize;

export const createBackground = ({
  canvasWidth,
  canvasHeight,
  state,
}: ParamsType) => {
  const speed = getShipSpeedSelector(state);

  ctx.fillStyle = BLACK_COLOR;
  ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  ctx.fillStyle = WHITE_COLOR;

  for (let i = 0; i < speed; i++) {
    ctx.fillRect(getRand(canvasWidth), getRand(canvasHeight), 2, 2);
  }
};
