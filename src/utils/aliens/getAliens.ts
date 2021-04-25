import { ctx } from "../..";
import { RED_COLOR, YELLOW_COLOR } from "../../constants/colors";
import { getWallSelector } from "../../store/aliens/selectors";
import { setWallAction } from "../../store/aliens/slice";
import { getBulletsSelector } from "../../store/arsenal/selectors";
import { getCanvasSizeSelector } from "../../store/canvas/selectors";
import { getScoreSelector } from "../../store/HUD/selectors";
import { setScoreAction } from "../../store/HUD/slice";
import { dispatch, StoreType } from "../../store/store";
import { confirmHitToAlien } from "../hits/confirmHitToAlien";
import { animateAlien } from "./animateAlien";

export const getAliens = (state: StoreType) => {
  const wall = getWallSelector(state);
  const bullets = getBulletsSelector(state);
  const { canvasHeight } = getCanvasSizeSelector(state);

  const newAliens = wall.reduce((acc, alien, index) => {
    const { alienX, alienY, alienHp, alienSize } = alien;

    const bullet = bullets.find(({ bulletX, bulletY }) =>
      confirmHitToAlien({ bulletX, bulletY, alienX, alienY, alienSize })
    );

    ctx.fillStyle = YELLOW_COLOR;

    let newAlien = animateAlien(alien, index + 1);

    if (bullet) {
      const { bulletDmg } = bullet;
      const newAlienHp = alienHp - bulletDmg;
      ctx.fillStyle = RED_COLOR;

      newAlien = { ...alien, alienHp: newAlienHp };
    }

    const needRemoveAlien = alienHp < 0;
    const isAlienOutOfScreen = newAlien.alienY > canvasHeight;

    if (needRemoveAlien || isAlienOutOfScreen) {
      if (needRemoveAlien) {
        const score = getScoreSelector(state);
        dispatch(setScoreAction(score + alien.scoreNumber));
      }
    } else {
      acc.push(newAlien);
    }
    return acc;
  }, []);

  dispatch(setWallAction(newAliens));
};
