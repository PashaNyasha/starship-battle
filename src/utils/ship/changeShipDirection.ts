import { batchActions } from "redux-batched-actions";
import { ctx } from "../..";
import { BLOCK_SIZE } from "../../constants/canvas";
import {
  getCanvasSizeSelector,
} from "../../store/canvas/selectors";
import {
  getShipXSelector,
  getShipYSelector,
  isShipDownSelector,
  isShipLeftSelector,
  isShipRightSelector,
  isShipUpSelector,
} from "../../store/ship/selectors";
import { shipActions } from "../../store/ship/slice";
import { dispatch, StoreType } from "../../store/store";
import { shipImage } from "../playGame";
import { makeShipDontGetOutOfTheBoundaries } from "./makeShipDontGetOutOfTheBoundaries";

const { setShipXAction, setShipYAction } = shipActions;

type ParamsType = {
  state: StoreType;
  speed: number;
};

const AWWWW = 10;

export const changeShipDirection = ({ state, speed }: ParamsType) => {
  const x = getShipXSelector(state);
  const y = getShipYSelector(state);
  const { canvasWidth, canvasHeight } = getCanvasSizeSelector(state);
  const isUp = isShipUpSelector(state);
  const isLeft = isShipLeftSelector(state);
  const isDown = isShipDownSelector(state);
  const isRight = isShipRightSelector(state);

  let newX = x;
  let newY = y;

  if (isUp && isLeft) {
    newX = x - AWWWW;
    newY = y - AWWWW;
  }

  if (isUp && isRight) {
    newX = x + AWWWW;
    newY = y - AWWWW;
  }

  if (isDown && isLeft) {
    newX = x - AWWWW;
    newY = y + AWWWW;
  }

  if (isDown && isRight) {
    newX = x + AWWWW;
    newY = y + AWWWW;
  }

  if (isUp) {
    newY = y - AWWWW;
  }

  if (isLeft) {
    newX = x - AWWWW;
  }

  if (isDown) {
    newY = y + AWWWW;
  }

  if (isRight) {
    newX = x + AWWWW;
  }

  const superX = makeShipDontGetOutOfTheBoundaries({
    direction: newX,
    blockSize: BLOCK_SIZE,
    canvasSize: canvasWidth,
  });
  
  const superY = makeShipDontGetOutOfTheBoundaries({
    direction: newY,
    blockSize: BLOCK_SIZE,
    canvasSize: canvasHeight,
  });

  dispatch(batchActions([setShipXAction(superX), setShipYAction(superY)]));

  ctx.drawImage(shipImage, superX, superY, BLOCK_SIZE, BLOCK_SIZE);
};
