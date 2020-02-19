export const filter = (num, arr) => {
  return {
    num,
    color: arr.includes(num) ? "#000000" : null
  };
};

export function* defaultYield(arr) {
  yield [...arr].map((num) => ({ num, color: null }));
  return;
}

export function* doneYield(arr) {
  for (let i = 0; i < arr.length; ++i) {
    yield [...arr].map((num) => ({
      num,
      color: num <= arr[i] ? "#f2f2f2" : null
    }));
  }
  return;
}

export function* swapYield(arr, i, j) {
  yield [...arr].map((num) => filter(num, [arr[i], arr[j]]));
  arr[i] = arr.splice(j, 1, arr[i])[0];
  yield [...arr].map((num) => filter(num, [arr[i], arr[j]]));
  yield* defaultYield(arr);
  return;
}
