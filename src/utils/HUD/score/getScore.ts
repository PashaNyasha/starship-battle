import { ctx } from "../../..";
import { WHITE_COLOR } from "../../../constants/colors";
import { getScoreSelector } from "../../../store/HUD/selectors";
import { StoreType } from "../../../store/store";

const FONT = '14px Zen-dots';

export const getScore = (
  state: StoreType,
  canvasWidth: number,
) => {
  const score = getScoreSelector(state);

  const scoreText = `SCORE: ${score}`;
  const x = canvasWidth - 350;
  const y = 50;

  ctx.fillStyle = WHITE_COLOR;
  ctx.font = FONT;
  ctx.fillText(scoreText, x, y);
};
