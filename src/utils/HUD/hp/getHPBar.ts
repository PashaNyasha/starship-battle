import { ctx } from "../../..";
import { GREEN_COLOR, WHITE_COLOR, RED_COLOR } from "../../../constants/colors";
import {
  FONT_STYLE,
  HP_BAR_HEIGHT,
  HP_BAR_X,
  HP_BAR_Y,
  HP_NAME_TEXT_X,
  HP_TEXT_Y,
  LIFE_TEXT,
} from "../../../constants/HUD";
import { SHIP_HP_BY_LVL } from "../../../constants/ship";
import {
  getDamageWidthSelector,
  getHUDParamsSelector,
  getLifeGaugeWidthSelector,
} from "../../../store/HUD/selectors";
import { setHpDamageWidthAction } from "../../../store/HUD/slice";
import {
  getShipHPSelector,
  getShipLevelSelector,
} from "../../../store/ship/selectors";
import { dispatch, StoreType } from "../../../store/store";

export const getHPBar = (state: StoreType) => {
  const hp = getShipHPSelector(state);
  const level = getShipLevelSelector(state);
  const { hpBarWidth, hpCountTextX } = getHUDParamsSelector(state);
  const lifeGaugeWidth = getLifeGaugeWidthSelector(state);
  const damageWidth = getDamageWidthSelector(state);

  const hpCountText = `${hp} / ${SHIP_HP_BY_LVL[level]}`;
  const newHpWidth = hp * (hpBarWidth / 100);

  // const damageNumber = hpBarWidth - newHpWidth;

  // Damage
  ctx.fillStyle = RED_COLOR;
  ctx.fillRect(HP_BAR_X, HP_BAR_Y, damageWidth, HP_BAR_HEIGHT);

  if (damageWidth > newHpWidth) {
    const newDamageWidth = damageWidth - 1;
    dispatch(setHpDamageWidthAction(newDamageWidth));
  }

  // Life gauge
  ctx.fillStyle = GREEN_COLOR;
  ctx.fillRect(HP_BAR_X, HP_BAR_Y, lifeGaugeWidth, HP_BAR_HEIGHT);

  // Bar border
  ctx.lineWidth = 2;
  ctx.strokeStyle = WHITE_COLOR;
  ctx.strokeRect(HP_BAR_X, HP_BAR_Y, hpBarWidth, HP_BAR_HEIGHT);

  // Text
  ctx.fillStyle = WHITE_COLOR;
  ctx.font = FONT_STYLE;
  ctx.fillText(LIFE_TEXT, HP_NAME_TEXT_X, HP_TEXT_Y);

  // Count
  ctx.fillText(hpCountText, hpCountTextX, HP_TEXT_Y);
};
