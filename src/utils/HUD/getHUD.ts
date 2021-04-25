import { getCanvasSizeSelector } from "../../store/canvas/selectors";
import { StoreType } from "../../store/store";
import { getArsenalHUD } from "./arsenal/getArsenalHUD";
import { getHPBar } from "./hp/getHPBar";
import { getScore } from "./score/getScore";

export const getHUD = (state: StoreType) => {
  const { canvasWidth, canvasHeight } = getCanvasSizeSelector(state);

  getHPBar(state);

  getArsenalHUD(state, canvasWidth, canvasHeight);

  getScore(state, canvasWidth);
};
