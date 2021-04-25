import { ctx } from "../..";
import { BLOCK_SIZE } from "../../constants/canvas";
import { YELLOW_COLOR } from "../../constants/colors";
import { CIRCLE_270_DEGREE, FULL_CIRCLE_DEGREE } from "../../constants/HUD";
import { getWallSelector } from "../../store/aliens/selectors";
import { IBullet } from "../../store/arsenal/interfaces";
import {
  getBulletsSelector,
  isShootingSelector,
} from "../../store/arsenal/selectors";
import { setBulletsAction } from "../../store/arsenal/slice";
import { getHotMeterSelector, isHotSelector } from "../../store/HUD/selectors";
import { setHotMeterAction, setIsHotAction } from "../../store/HUD/slice";
import { getShipXSelector, getShipYSelector } from "../../store/ship/selectors";
import { dispatch, StoreType } from "../../store/store";
import { confirmHitToAlien } from "../hits/confirmHitToAlien";

export const getShoot = (state: StoreType) => {
  const bullets = getBulletsSelector(state);
  const isShooting = isShootingSelector(state);
  const shipX = getShipXSelector(state);
  const shipY = getShipYSelector(state);
  const hotMeter = getHotMeterSelector(state);
  const isHot = isHotSelector(state);
  const wall = getWallSelector(state);

  const newBullets = bullets.reduce((acc, bullet) => {
    const { bulletX, bulletY, bulletSize } = bullet;
    const isBulletOutOfScreen = bulletY < 0;

    const bulletOnTarget = wall.find(({ alienX, alienY, alienSize }) =>
      confirmHitToAlien({ bulletX, bulletY, alienX, alienY, alienSize })
    );

    if (!isBulletOutOfScreen && !bulletOnTarget) {
      const newY = bulletY - 10;

      ctx.fillStyle = YELLOW_COLOR;
      ctx.fillRect(bulletX, newY, bulletSize, bulletSize);

      acc.push({ ...bullet, bulletY: newY });
    }

    return acc;
  }, []);

  if (isShooting && !isHot) {
    const bulletSize = 4;
    const bulletX = shipX + BLOCK_SIZE / 2 - bulletSize / 2;
    const bulletY = shipY - bulletSize * 2;
    const newBullet: IBullet = {
      bulletSize,
      bulletX,
      bulletY,
      bulletImageSrc: "",
      bulletDmg: 20,
    };

    newBullets.push(newBullet);

    if (hotMeter < FULL_CIRCLE_DEGREE) {
      dispatch(setHotMeterAction(hotMeter + 1));
    }

    if (hotMeter === FULL_CIRCLE_DEGREE) {
      dispatch(setIsHotAction(true));
    }
  } else {
    if (hotMeter > 0) {
      dispatch(setHotMeterAction(hotMeter - 1));
    }

    if (hotMeter < CIRCLE_270_DEGREE) {
      dispatch(setIsHotAction(false));
    }
  }

  dispatch(setBulletsAction(newBullets));
};
