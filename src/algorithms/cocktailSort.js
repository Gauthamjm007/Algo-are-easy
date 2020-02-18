import { defaultYield, doneYield, swapYield } from './helperFunctions';

export function *cocktailSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let start = 0, end = len-1;
  let swapped = true;

  while(swapped){
    swapped = false;
    for(let i = start; i < end; ++i){
      if(arrCopy[i] > arrCopy[i+1]){
        yield* swapYield(arrCopy, i, i+1);
        swapped = true;
      }
    }

    if(!swapped){
      break;
    }

    swapped = false;
    end-=1;
    for(let i = end-1; i >= start; --i){
      if(arrCopy[i] > arrCopy[i+1]){
        yield* swapYield(arrCopy, i, i+1);
        swapped = true;
      }
    }

    start+=1;
  }

  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}