import { filter, defaultYield, doneYield } from "./helperFunctions";

const getPosition = (num, place) => {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
};

export function* radixSort(arr) {
  let arrCopy = [...arr];
  let len = arrCopy.length;

  const maxLength = Math.max(...arrCopy).toString().length;
  for (let i = 0; i < maxLength; i++) {
    let buckets = Array.from({ length: 10 }, () => []);
    for (let j = 0; j < len; j++) {
      let pos = getPosition(arrCopy[j], i);
      buckets[pos].push(arrCopy[j]);
      let newArr = [...[].concat(...buckets), ...arrCopy.slice(j + 1)];
      yield [...newArr].map((num) => filter(num, [...buckets[pos]]));
    }

    arrCopy = [].concat(...buckets);
    for (let pos = 0; pos < buckets.length; ++pos) {
      yield [...arrCopy].map((num) => filter(num, [...buckets[pos]]));
    }
    yield* defaultYield(arrCopy);
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}
