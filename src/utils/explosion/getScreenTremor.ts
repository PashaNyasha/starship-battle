import { ctx } from "../..";
import { getRandom } from "../getRandom";

const SCREN_SHIFT_NUMBER = 25;

export const getScreenTremor = () => {
  const dx = getRandom(SCREN_SHIFT_NUMBER);
  const dy = getRandom(SCREN_SHIFT_NUMBER);
  ctx.translate(dx, dy);
};
