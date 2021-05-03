import { ctx } from "../..";
import { YELLOW_COLOR } from "../../constants/colors";
import { CIRCLE_270_DEGREE, FULL_CIRCLE_DEGREE } from "../../constants/HUD";
import { getWallSelector } from "../../store/aliens/selectors";
import {
  getBulletsSelector,
  getShootSpeedSelector,
  isShootingSelector,
} from "../../store/arsenal/selectors";
import { setBulletsAction } from "../../store/arsenal/slice";
import { getHotMeterSelector, isHotSelector } from "../../store/HUD/selectors";
import { setHotMeterAction, setIsHotAction } from "../../store/HUD/slice";
import { getShipXSelector, getShipYSelector } from "../../store/ship/selectors";
import { dispatch, StoreType } from "../../store/store";
import { ShootVariantNameType, DrawBulletUtilType } from "../../types/arsenal";
import { confirmHitToAlien } from "../hits/confirmHitToAlien";
import { drawBullets } from "./bullets/drawBullets";
import { getShootVariant } from "./getShootVariant";

let shootTimeout = 30;

type ParamsType = {
  state: StoreType;
  shootVariant: ShootVariantNameType;
};

export const getShoot = ({ state, shootVariant }: ParamsType) => {
  const bullets = getBulletsSelector(state);
  const isShooting = isShootingSelector(state);
  const shipX = getShipXSelector(state);
  const shipY = getShipYSelector(state);
  const hotMeter = getHotMeterSelector(state);
  const isHot = isHotSelector(state);
  const wall = getWallSelector(state);
  const shootSpeed = getShootSpeedSelector(state);

  const newBullets = bullets.reduce((acc, bullet) => {
    const {
      bulletX,
      bulletY,
      bulletWidth,
      bulletHeight,
      shadowColor,
      lineWidth,
      isNeedStroke,
      bullet2X,
      bullet3X,
      bullet3Y,
    } = bullet;

    const isBulletOutOfScreen = bulletY < 0;

    // TODO: доделать
    const bulletOnTarget = wall.find(({ alienX, alienY, alienSize }) =>
      confirmHitToAlien({ bulletX, bulletY, alienX, alienY, alienSize })
    );

    if (!isBulletOutOfScreen && !bulletOnTarget) {
      const newY = bulletY - 10;
      const newY3 = bulletY - 50;

      drawBullets({
        x: bulletX,
        y: newY,
        width: bulletWidth,
        height: bulletHeight,
        color: YELLOW_COLOR,
        shadowColor,
        lineWidth,
        isNeedStroke,
        x2: bullet2X,
        y2: newY,
        x3: bullet3X,
        y3: bullet3Y,
      });

      acc.push({ ...bullet, bulletY: newY, bullet2Y: newY, bullet3Y: newY3 });
    }

    return acc;
  }, []);

  shootTimeout += 1;

  const isTimeToShoot = isShooting && shootTimeout >= shootSpeed && !isHot;

  if (isTimeToShoot) {
    const bullet = getShootVariant({ shootVariant, shipX, shipY });

    newBullets.push(bullet);

    let newHotmeter = hotMeter + 5;

    if (hotMeter >= FULL_CIRCLE_DEGREE) {
      newHotmeter = FULL_CIRCLE_DEGREE;
      dispatch(setIsHotAction(true));
    }

    dispatch(setHotMeterAction(newHotmeter));

    shootTimeout = 0;
  }

  if (hotMeter > 0 && !isShooting || isHot) {
    dispatch(setHotMeterAction(hotMeter - 1));
  }

  if (hotMeter < CIRCLE_270_DEGREE) {
    dispatch(setIsHotAction(false));
  }

  dispatch(setBulletsAction(newBullets));
};
