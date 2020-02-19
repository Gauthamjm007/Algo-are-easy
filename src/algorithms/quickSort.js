import { defaultYield, doneYield } from "./helperFunctions";

function* swapYieldQuick(arr, i, j, pivot) {
  yield [...arr].map((num) => ({
    num,
    color:
      num === pivot
        ? "#737373"
        : num === arr[i] || num === arr[j]
        ? "#000000"
        : null
  }));
  arr[i] = arr.splice(j, 1, arr[i])[0];
  yield [...arr].map((num) => ({
    num,
    color:
      num === pivot
        ? "#737373"
        : num === arr[i] || num === arr[j]
        ? "#f2f2f2"
        : null
  }));
  yield [...arr].map((num) => ({
    num,
    color: num === pivot ? "#737373" : null
  }));
  return;
}

function* partition(arr, left, right) {
  let pivot = arr[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (arr[i] < pivot) {
      i++;
    }
    while (arr[j] > pivot) {
      j--;
    }
    if (i <= j) {
      yield* swapYieldQuick(arr, i, j, pivot);
      i++;
      j--;
    }
  }
  return i;
}
function* main(arr, len, left, right) {
  let index;
  if (len > 1) {
    index = yield* partition(arr, left, right, index);
    if (left < index - 1) {
      yield* main(arr, len, left, index - 1);
    }
    if (index < right) {
      yield* main(arr, len, index, right);
    }
  }
}

export function* quickSort(arr) {
  let arrCopy = [...arr];
  let len = arrCopy.length;
  yield* main(arrCopy, len, 0, len - 1);
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
