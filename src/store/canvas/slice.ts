import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICanvasSize, ICanvasStorage } from "./interfaces";

export const initialStateCanvas: ICanvasStorage = {
  canvasWidth: 0,
  canvasHeight: 0,
};

const slice = createSlice({
  name: "canvasReducer",
  initialState: initialStateCanvas,
  reducers: {
    setCanvasWidthAction: (state, { payload }: PayloadAction<number>) => {
      state.canvasWidth = payload;
    },
    setCanvasHeightAction: (state, { payload }: PayloadAction<number>) => {
      state.canvasHeight = payload;
    },
    setCanvasSizeAction: (state, { payload }: PayloadAction<ICanvasSize>) => {
      state.canvasWidth = payload.canvasWidth;
      state.canvasHeight = payload.canvasHeight;
    },
  },
});

const { reducer: canvasReducer, actions: canvasActions } = slice;

export const {
  setCanvasSizeAction,
  setCanvasHeightAction,
  setCanvasWidthAction
} = canvasActions;

export { canvasReducer, canvasActions };
