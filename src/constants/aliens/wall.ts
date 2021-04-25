import { IAlien } from "../../store/aliens/interfaces";
import { createAliensWall } from "../../utils/aliens/createAliensWall";

const ROW_5: IAlien[] = createAliensWall({
  count: 24,
  alienY: -150,
  alienHp: 150,
  alienSize: 50,
  scoreNumber: 10,
  alienX: 50,
});

const ROW_4: IAlien[] = ROW_5.map((alien) => ({
  ...alien,
  alienY: alien.alienSize + alien.alienY,
}));

export const WALL: IAlien[][] = [ROW_5, ROW_4];
