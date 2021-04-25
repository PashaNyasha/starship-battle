import { IAlien } from "../../store/aliens/interfaces";
import { WALL } from "./wall";

interface IAliensVariants {
  wall: IAlien[][];
}

export const ALIENS_VARIANTS: IAliensVariants = {
  wall: WALL,
};
