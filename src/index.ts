import { batchActions } from "redux-batched-actions";
import { canvasActions } from "./store/canvas/slice";
import { dispatch } from "./store/store";
import { playGame } from "./utils/playGame";
import { getPressedKey } from "./utils/getPressedKey";
import { shipActions } from "./store/ship/slice";
import { getHUDParams } from "./utils/HUD/getHudParams";
import { ICanvasSize } from "./store/canvas/interfaces";
import { BLOCK_SIZE } from "./constants/canvas";
import { IHUDParams } from "./store/HUD/interfaces";
import {
  setHpDamageWidthAction,
  setHUDParamsAction,
  setLifeGaugeWidthAction,
} from "./store/HUD/slice";
import { getHPDamage } from "./utils/HUD/hp/getHPDamage";

import "./index.scss";

const { setCanvasSizeAction } = canvasActions;

const { setShipXAction, setShipYAction } = shipActions;

const root = document.getElementById("root");
export const canvas = document.createElement("canvas");
export const ctx = canvas.getContext("2d");

root.append(canvas);

const resizeCanvas = (isLoad: boolean) => {
  const { clientWidth, clientHeight } = document.documentElement;
  canvas.width = clientWidth;
  canvas.height = clientHeight;

  if (isLoad) {
    const centerX = clientWidth / 2 - BLOCK_SIZE / 2;
    const bottomY = clientHeight - BLOCK_SIZE * 2;

    dispatch(batchActions([setShipXAction(centerX), setShipYAction(bottomY)]));
  }

  const newSize: ICanvasSize = {
    canvasWidth: clientWidth,
    canvasHeight: clientHeight,
  };

  const HUDParams: IHUDParams = getHUDParams(clientWidth);
  const { damageWidth, lifeGaugeWidth } = getHPDamage({
    newHpBarWidth: HUDParams.hpBarWidth,
    isLoad: true,
  });

  dispatch(
    batchActions([
      setCanvasSizeAction(newSize),
      setHUDParamsAction(HUDParams),
      setHpDamageWidthAction(damageWidth),
      setLifeGaugeWidthAction(lifeGaugeWidth),
    ])
  );
};

window.addEventListener("load", () => resizeCanvas(true));
window.addEventListener("resize", () => resizeCanvas(false));

window.addEventListener("keydown", (event: KeyboardEvent) =>
  getPressedKey({ event, isKeydown: true })
);

window.addEventListener("keyup", (event: KeyboardEvent) =>
  getPressedKey({ event, isKeydown: false })
);

playGame();
