import { ctx } from "../../..";
import { BALL } from "../../../constants/arsenal";
import { BLOCK_SIZE } from "../../../constants/canvas";
import { RED_COLOR, YELLOW_COLOR } from "../../../constants/colors";
import { DEGREE_360 } from "../../../constants/common";
import { ISpecialBullet } from "../../../store/arsenal/interfaces";
import { getCanvasSizeSelector } from "../../../store/canvas/selectors";
import { DrawSpecialBulletParamsType } from "../../../types/arsenal";
import { checkIsTimeToRed } from "../../HUD/arsenal/checkIsTimeToRed";

export const getBall = ({
  state,
  special,
}: DrawSpecialBulletParamsType): ISpecialBullet => {
  const { canvasWidth, canvasHeight } = getCanvasSizeSelector(state);
  const { specialX, specialY, isInit, radius, dX, dY } = special;

  const isRed = checkIsTimeToRed();

  ctx.save();
  ctx.shadowBlur = 25;
  ctx.shadowColor = !isRed ? RED_COLOR : YELLOW_COLOR;
  ctx.fillStyle = isRed ? RED_COLOR : YELLOW_COLOR;

  ctx.beginPath();
  ctx.arc(specialX, specialY, radius, 0, DEGREE_360);
  ctx.fill();
  ctx.restore();

  let newDx = dX;

  if (specialX + BLOCK_SIZE >= canvasWidth || specialX <= 0) {
    newDx = -dX;
  }

  let newIsInit = isInit;

  let newDy = dY;

  if (specialY + BLOCK_SIZE >= canvasHeight || specialY <= 0) {
    newDy = -dY;
    newIsInit = false;
  }

  return {
    ...BALL,
    specialX: newIsInit ? specialX : specialX + newDx,
    specialY: specialY + newDy,
    isInit: newIsInit,
    dX: newDx,
    dY: newDy,
  };
};
