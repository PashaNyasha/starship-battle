import { StoreType } from "../../store/store";
import { getArsenalHUD } from "./arsenal/getArsenalHUD";
import { getHPBar } from "./hp/getHPBar";

export const getHUD = (state: StoreType) => {
  getHPBar(state);

  // Todo BulletsMeter
  getArsenalHUD(state);
};
