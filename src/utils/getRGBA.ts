import { getRandomColorNumber } from "./getRandomColor";

export const getRGBA = () =>
  `rgb(${getRandomColorNumber()}, ${getRandomColorNumber()}, ${getRandomColorNumber()})`;
