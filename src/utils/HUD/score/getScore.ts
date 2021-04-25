import { ctx } from "../../..";
import { WHITE_COLOR } from "../../../constants/colors";
import { getScoreSelector } from "../../../store/HUD/selectors";
import { StoreType } from "../../../store/store";

export const getScore = (
  state: StoreType,
  canvasWidth: number,
) => {
  const score = getScoreSelector(state);

  const scoreText = `Score: ${score}`;
  const x = canvasWidth - 150;
  const y = 50;

  ctx.fillStyle = WHITE_COLOR;
  ctx.font = "25px Antonio";
  ctx.fillText(scoreText, x, y);
};
