import { defaultYield, doneYield, swapYield } from "./helperFunctions";

export function* shellSort(arr) {
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let step = Math.floor(len / 2);
  while (step > 0) {
    for (let i = step; i < len; i++) {
      let j = i;
      let temp = arrCopy[i];

      while (j >= step && arrCopy[j - step] > temp) {
        yield* swapYield(arrCopy, j - step, j);
        j -= step;
      }
      arrCopy[j] = temp;
    }

    if (step === 2) {
      step = 1;
    } else {
      step = parseInt((step * 5) / 11);
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
