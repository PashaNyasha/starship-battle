import { ctx } from "../..";
import { BLOCK_SIZE } from "../../constants/canvas";
import { WHITE_COLOR } from "../../constants/colors";
import {
  EXPLOSION_SRC,
  EXPLOSION_IMG_SIZE,
  EXPLOSION_SPRITE_LENGTH,
} from "../../constants/imagesSrc";
import { getExplosionEffectSelector } from "../../store/effects/selectors";
import { setExplosionEffectAction } from "../../store/effects/slice";
import { dispatch, StoreType } from "../../store/store";
import { getScreenTremor } from "./getScreenTremor";

const img = new Image();
img.src = EXPLOSION_SRC;

const BOOM_SIZE = BLOCK_SIZE * 5;

const IMG_SIZE = EXPLOSION_IMG_SIZE / EXPLOSION_SPRITE_LENGTH;

const TIMEOUT_END = 2;

const MAX_TREMOR_COUNT = IMG_SIZE;

// let spritesHorizontalCounter = 0;
// let spritesVerticalCounter = 0;

// let timeout = 0;

// let tremorCounter = 0;

// let isExplosion = true;

// let hasTremor = true;

// let isInit = true;

type ParamsType = {
  x: number;
  y: number;
  state: StoreType;
  isStart: boolean;
};

export const getExplosion = ({ x, y, state, isStart }: ParamsType) => {
  const explosion = getExplosionEffectSelector(state);

  let spritesHorizontalCounter = explosion.spritesHorizontalCounter;
  let spritesVerticalCounter = explosion.spritesVerticalCounter;

  let timeout = explosion.timeout;

  let tremorCounter = explosion.tremorCounter;

  let isExplosion = explosion.isExplosion;

  let hasTremor = explosion.hasTremor;

  let isInit = explosion.isInit;

  ctx.fillStyle = WHITE_COLOR;
  ctx.drawImage(
    img,
    IMG_SIZE * spritesHorizontalCounter, // x img cut
    IMG_SIZE * spritesVerticalCounter, // y img cut
    IMG_SIZE,
    IMG_SIZE,
    x, // x
    y, // y
    BOOM_SIZE,
    BOOM_SIZE
  );

  if (isExplosion && hasTremor) {
    timeout++;
  }

  if (timeout === TIMEOUT_END) {
    spritesHorizontalCounter++;
    timeout = 0;
  }

  if (spritesHorizontalCounter === EXPLOSION_SPRITE_LENGTH) {
    spritesVerticalCounter++;
    spritesHorizontalCounter = 0;
  }

  if (spritesVerticalCounter === EXPLOSION_SPRITE_LENGTH) {
    spritesVerticalCounter = 0;
    spritesHorizontalCounter = 0;
    isExplosion = false;
  }

  if (hasTremor && tremorCounter < MAX_TREMOR_COUNT) {
    getScreenTremor();

    tremorCounter++;
  }

  const isEndOfEffect = hasTremor && tremorCounter === MAX_TREMOR_COUNT;

  if (isEndOfEffect) {
    hasTremor = false;
    isExplosion = true;
    tremorCounter = 0;
  }

  dispatch(
    setExplosionEffectAction({
      ...explosion,
      spritesHorizontalCounter,
      spritesVerticalCounter,
      timeout,
      tremorCounter,
      isExplosion,
      hasTremor,
      isInit,
    })
  );
};
