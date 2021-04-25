import { ctx } from "../..";
import { IAlien } from "../../store/aliens/interfaces";

export const animateAlien = (
  { alienX, alienY, alienSize, alienHp, scoreNumber }: IAlien,
  index: number
): IAlien => {
  ctx.fillRect(alienX, alienY, alienSize, alienSize);
  const newY = alienY + 1;
  const newX = alienX + 1;
  return { alienX, alienY: newY, alienSize, alienHp, scoreNumber };
};
