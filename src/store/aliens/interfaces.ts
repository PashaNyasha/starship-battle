export interface IAlien {
  alienX: number;
  alienY: number;
  alienHp: number;
  alienSize: number;
  scoreNumber: number;
}

// Todo add another variants
export interface IAliensStorage {
  wall: IAlien[];
  row: IAlien[];
  snake: IAlien[];
}
