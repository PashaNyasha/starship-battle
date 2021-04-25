import { IAlien } from "../../store/aliens/interfaces";

type ParamsType = {
  count: number;
} & IAlien;

export const createAliensWall = ({
  alienX,
  alienY,
  alienHp,
  alienSize,
  scoreNumber,
  count,
}: ParamsType): IAlien[] =>
  Array(count)
    .fill(null)
    .map((alien, index) => ({
      alienY,
      alienHp,
      alienSize,
      scoreNumber,
      alienX: (index + 1) * (alienX + alienSize),
    }));
