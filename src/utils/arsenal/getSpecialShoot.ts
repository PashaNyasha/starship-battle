import { batchActions } from "redux-batched-actions";
import { ISpecialBullet } from "../../store/arsenal/interfaces";
import {
  getSpecialBulletsSelector,
  getSpecialVariantNameSelector,
  isSpecialShootingSelector,
} from "../../store/arsenal/selectors";
import { setSpecialBulletAction } from "../../store/arsenal/slice";
import { getShipCoordinatesSelector } from "../../store/ship/selectors";
import { dispatch, StoreType } from "../../store/store";
import { DrawSpecialBulletType } from "../../types/arsenal";
import { getSpecialBullet } from "./getSpecialBullet";

let showSpecial = false;
let timeout: any = null;

let getSpecial: DrawSpecialBulletType = null;

const removeSpecial = () => {
  showSpecial = false;
  clearTimeout(timeout);
  timeout = null;
  getSpecial = null;
  dispatch(
    batchActions([
      setSpecialBulletAction(null),
      // setSpecialVariantNameAction(null),
    ])
  );
};

export const getSpecialShoot = (state: StoreType) => {
  const oldSpecial = getSpecialBulletsSelector(state);
  const specialVariantName = getSpecialVariantNameSelector(state);
  const isSpecialShoot = isSpecialShootingSelector(state);
  const { shipX, shipY } = getShipCoordinatesSelector(state);
  let special: ISpecialBullet = oldSpecial;

  const isShootConfirm =
    isSpecialShoot && specialVariantName && !timeout && !special;

  if (isShootConfirm) {
    showSpecial = true;

    const { special: createdSpecial, drawMethod } = getSpecialBullet({
      specialVariantName,
      shipX,
      shipY,
    });

    special = createdSpecial;
    getSpecial = drawMethod;

    timeout = setTimeout(removeSpecial, 3000);
  }

  if (showSpecial) {
    const newSpecial = getSpecial({ state, special });
    dispatch(setSpecialBulletAction(newSpecial));
  }
};
