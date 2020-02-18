import { defaultYield, doneYield, swapYield } from "./helperFunctions";

function* selectionYield(arr, filteArr, color) {
  yield [...arr].map((num) => ({
    num,
    color: filteArr.includes(num) ? color : null
  }));
  return;
}

export function* selectionSort(arr) {
  let arrCopy = [...arr];
  let len = arrCopy.length;
  for (let i = 0; i < len - 1; ++i) {
    let j_min = i;
    for (let j = i + 1; j < len; ++j) {
      yield* selectionYield(arrCopy, [arrCopy[j_min]], "#0000FF");
      yield* selectionYield(arrCopy, [arrCopy[j_min], arrCopy[j]], "#FF0000");
      if (arrCopy[j] < arrCopy[j_min]) {
        j_min = j;
      }
    }
    if (j_min !== i) {
      yield* swapYield(arrCopy, j_min, i);
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
