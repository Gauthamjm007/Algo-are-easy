import { filter, defaultYield, doneYield } from './helperFunctions';

export function *insertionSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;
  for (let i = 1; i < len; i++){
    if (arrCopy[i] < arrCopy[0]) {
      for(let k = i; k > 0; --k){
        yield [...arrCopy].map(num => filter(num,[arrCopy[k], arrCopy[k-1]]));
        arrCopy.splice(k,0,arrCopy.splice(k-1,1)[0]);
        yield [...arrCopy].map(num => filter(num,[arrCopy[k], arrCopy[k-1]]));
        yield* defaultYield(arrCopy);
      }
    } 
    else if (arrCopy[i] > arrCopy[i-1]){
      continue;
    } 
    else {
      for (let j = 1; j < i; j++) {
        if (arrCopy[i] > arrCopy[j-1] && arrCopy[i] < arrCopy[j]){
          for(let k = i; k > j; --k){
            yield [...arrCopy].map(num => filter(num,[arrCopy[k], arrCopy[k-1]]));
            arrCopy.splice(k,0,arrCopy.splice(k-1,1)[0]);
            yield [...arrCopy].map(num => filter(num,[arrCopy[k], arrCopy[k-1]]));
            yield* defaultYield(arrCopy);
          }
        }
      }
    }
  }
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
};