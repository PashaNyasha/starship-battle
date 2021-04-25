import { getHUDParamsSelector, getLifeGaugeWidthSelector } from "../../../store/HUD/selectors";
import { getShipHPSelector } from "../../../store/ship/selectors";
import { getState } from "../../../store/store";

type ParamsType = {
  newHpBarWidth?: number;
  isLoad?: boolean;
};

interface IResult {
  hp: number;
  damageWidth?: number;
  lifeGaugeWidth: number;
}

export const getHPDamage = ({
  newHpBarWidth,
  isLoad = false,
}: ParamsType): IResult => {
  const state = getState();
  const hp = getShipHPSelector(state);
  const { hpBarWidth } = getHUDParamsSelector(state);
  const lifeGaugeWidth = getLifeGaugeWidthSelector(state);

  const barWidth = newHpBarWidth ?? hpBarWidth;

  let newHp = hp;

  if (!isLoad) {
    // Todo add real damage
    newHp = hp > 0 ? hp - 10 : 0;
  }

  const newLifeGaugeWidth = newHp * (barWidth / 100);

  const newDamageWidth = lifeGaugeWidth;

  return {
    hp: newHp,
    damageWidth: newDamageWidth,
    lifeGaugeWidth: newLifeGaugeWidth,
  };
};
