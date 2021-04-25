import { ShipLevelsType } from "../store/ship/interfaces";
import level1 from "../assets/ships/level1.png";
import level2 from "../assets/ships/level2.png";
import level3 from "../assets/ships/level3.png";

export const SHIP_SPEED_VARIANTS = {
  normal: 50,
  fast: 100,
};

export const SHIPS_IMAGES_BY_LEVEL: Record<ShipLevelsType, string> = {
  level1,
  level2,
  level3,
};

export const SHIP_HP_BY_LVL: Record<ShipLevelsType, number> = {
  level1: 100,
  level2: 150,
  level3: 200,
};

export const HOT_METER_BY_LVL: Record<ShipLevelsType, number> = {
  level1: 150,
  level2: 200,
  level3: 250,
};
