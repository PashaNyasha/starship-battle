export type ShipLevelsType = "level1" | "level2" | "level3";

export type ShipCoordinatesType = {
  shipX: number;
  shipY: number;
};

export interface IShipStorage {
  shipLevel: ShipLevelsType;
  speed: number;
  isUp: boolean;
  isLeft: boolean;
  isDown: boolean;
  isRight: boolean;
  shipX: number;
  shipY: number;
  hp: number;
  speedMeter: number;
}
