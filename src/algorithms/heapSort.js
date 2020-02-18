import { defaultYield, doneYield, swapYield } from './helperFunctions';

function *heap_root(arr, len, i){
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;

  if (left < len && arr[left] > arr[max]) {
    max = left;
  }

  if (right < len && arr[right] > arr[max])     {
    max = right;
  }

  if (max !== i) {
    yield* swapYield(arr, i, max);
    yield* heap_root(arr, len, max);
  }
}

export function *heapSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  for(var i = Math.floor(len / 2); i >= 0; i -= 1){
    yield* heap_root(arrCopy, len, i);
  }

  for(i = len - 1; i > 0; i--){
    yield* swapYield(arrCopy, 0, i);
    len--;
    yield* heap_root(arrCopy, len, 0);
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
