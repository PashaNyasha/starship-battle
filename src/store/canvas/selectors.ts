import { createSelector } from "reselect";
import { StoreType } from "../store";
import { ICanvasSize, ICanvasStorage } from "./interfaces";
import { initialStateCanvas } from "./slice";

const getCanvasStorageSelector = (store: StoreType) =>
  store.canvas || initialStateCanvas;

export const getCanvasSizeSelector = createSelector(
  [getCanvasStorageSelector],
  ({ canvasWidth, canvasHeight }: ICanvasStorage): ICanvasSize => ({
    canvasWidth,
    canvasHeight,
  })
);
