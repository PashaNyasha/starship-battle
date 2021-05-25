import { ctx } from "../../..";
import { BOMB } from "../../../constants/arsenal";
import { WHITE_COLOR } from "../../../constants/colors";
import { EXPLOSION_SRC } from "../../../constants/imagesSrc";
import { ISpecialBullet } from "../../../store/arsenal/interfaces";
import { DrawSpecialBulletParamsType } from "../../../types/arsenal";
import { getExplosion } from "../../explosion/getExplosion";

const explosionImg = new Image();
explosionImg.src = EXPLOSION_SRC;

export const getBomb = ({
  state,
  special,
}: DrawSpecialBulletParamsType): ISpecialBullet => {
  const { specialX, specialY, specialWidth } = special;

  ctx.fillStyle = WHITE_COLOR;

  let newSize = specialWidth;

  let newY = specialY - 10;

  if (newY <= 500) {
    getExplosion({ x: specialX, y: specialY, state, isStart: true });
  }

  ctx.fillRect(specialX, specialY, newSize, newSize);

  return {
    ...BOMB,
    specialX,
    specialY: newY,
    specialWidth: newSize,
  };
};
