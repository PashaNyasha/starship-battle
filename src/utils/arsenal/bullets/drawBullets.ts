import { ctx } from "../../..";
import { TRANSPARENT } from "../../../constants/colors";
import { DrawBulletType } from "../../../types/arsenal";

export const drawBullets = ({
  x,
  y,
  width,
  height,
  color,
  shadowColor,
  shadowBlur,
  lineWidth,
  isNeedStroke = false,
  x2,
  y2,
  x3,
  y3,
}: DrawBulletType) => {
  ctx.fillStyle = color;
  ctx.shadowBlur = shadowBlur || 15;
  ctx.shadowColor = shadowColor || color;

  if (isNeedStroke) {
    ctx.lineWidth = lineWidth || 2;
    ctx.strokeRect(x, y, width, height);
  }

  const isDoubleShoot = Boolean(x2 && y2);
  const isTripleShoot = isDoubleShoot && Boolean(x3 && y3);

  if (isTripleShoot) {
    ctx.fillRect(x3, y3, width, height);
  }

  if (isDoubleShoot) {
    ctx.fillRect(x2, y2, width, height);
  }

  ctx.fillRect(x, y, width, height);

  ctx.shadowColor = TRANSPARENT;
};
