import {
  CANVAS_WIDTH_1024_PX,
  CANVAS_WIDTH_320_PX,
  CANVAS_WIDTH_480_PX,
  CANVAS_WIDTH_720_PX,
} from "../../constants/canvas";
import { FONT_SIZE } from "../../constants/HUD";
import { IHUDParams } from "../../store/HUD/interfaces";

export const getHUDParams = (canvasWidth: number): IHUDParams => {
  if (canvasWidth >= CANVAS_WIDTH_1024_PX) {
    return {
      hpBarWidth: 500,
      hpCountTextX: 450 - FONT_SIZE / 2,
    }
  }

  if (canvasWidth >= CANVAS_WIDTH_720_PX) {
    return {
      hpBarWidth: 350,
      hpCountTextX: 300 - FONT_SIZE / 2,
    }
  }

  if (canvasWidth >= CANVAS_WIDTH_480_PX) {
    return {
      hpBarWidth: 250,
      hpCountTextX: 200 - FONT_SIZE / 2,
    }
  }

  if (canvasWidth >= CANVAS_WIDTH_320_PX) {
    return {
      hpBarWidth: 200,
      hpCountTextX: 150 - FONT_SIZE / 2,
    }
  }
};
