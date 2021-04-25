type ParamsType = {
  direction: number;
  blockSize: number;
  canvasSize: number;
};

export const makeShipDontGetOutOfTheBoundaries = ({
  direction,
  blockSize,
  canvasSize,
}: ParamsType): number => {
  const max = direction + blockSize;

  if (direction <= 0) {
    return 0;
  } else if (max >= canvasSize) {
    return canvasSize - blockSize;
  }

  return direction;
};
