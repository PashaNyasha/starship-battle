const TIME = 20;

let timeToRed = 0;

let isNeedReduceTime = false;

export const checkIsTimeToRed = (): boolean => {
  if (timeToRed < TIME && !isNeedReduceTime) {
    timeToRed++;
    isNeedReduceTime = timeToRed === TIME;
    return isNeedReduceTime;
  }

  if (timeToRed > 0 && isNeedReduceTime) {
    timeToRed--;
    isNeedReduceTime = timeToRed > 0;

    return isNeedReduceTime;
  }
};
