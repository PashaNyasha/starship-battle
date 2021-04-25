import { SHIPS_IMAGES_BY_LEVEL, SHIP_SPEED_VARIANTS } from "../constants/ship";
import { getCanvasSizeSelector } from "../store/canvas/selectors";
import { getShipLevelSelector } from "../store/ship/selectors";
import { store } from "../store/store";
import { changeShipDirection } from "./ship/changeShipDirection";
import { createBackground } from "./canvas/createBackground";
import { getHUD } from "./HUD/getHUD";
import { getShoot } from "./arsenal/getShoot";
import { getAliens } from "./aliens/getAliens";

const { getState } = store;
const oldState = getState();

const shipLevel = getShipLevelSelector(oldState);

export const shipImage = new Image();
shipImage.src = SHIPS_IMAGES_BY_LEVEL[shipLevel];

export const playGame = () => {
  const state = getState();
  const { canvasWidth, canvasHeight } = getCanvasSizeSelector(state);

  createBackground({ canvasWidth, canvasHeight, state });

  changeShipDirection({ state, speed: SHIP_SPEED_VARIANTS.normal });
  getShoot(state);
  getAliens(state);
  getHUD(state);
  requestAnimationFrame(playGame);
};
