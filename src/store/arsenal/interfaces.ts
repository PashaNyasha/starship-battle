export interface IBullet {
  bulletX: number;
  bulletY: number;
  bulletImageSrc: string;
  bulletSize: number;
  bulletDmg: number;
}

export interface IArsenalStorage {
  isShooting: boolean;
  bullets: IBullet[];
}
