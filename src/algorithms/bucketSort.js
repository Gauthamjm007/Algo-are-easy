import { filter, defaultYield, doneYield } from './helperFunctions';

function *swapYieldBucket(buckets, pos, i, j){
  let arr = buckets[pos];
  yield [...[].concat(...buckets)].map(num => filter(num, [arr[i], arr[j]]));
  arr.splice(i,0,arr.splice(j,1)[0]);
  buckets[pos] = arr;
  yield [...[].concat(...buckets)].map(num => filter(num, [arr[i], arr[j]]));
  yield* defaultYield([...[].concat(...buckets)]);
  return;
}

function *insertionSort(buckets){
  for(let a = 0; a<buckets.length; ++a){
    let arr = buckets[a];
    const len = arr.length;
    for (let i = 1; i < len; i++){
      if (arr[i] < arr[0]) {
        for(let k = i; k > 0; --k){
          yield* swapYieldBucket(buckets, a, k, k-1);
        }
      } 
      else if (arr[i] > arr[i-1]){
        continue;
      } 
      else {
        for (let j = 1; j < i; j++) {
          if (arr[i] > arr[j-1] && arr[i] < arr[j]){
            for(let k = i; k > j; --k){
              yield* swapYieldBucket(buckets, a, k, k-1);
            }
          }
        }
      }
    }
    buckets[a] = arr;
  }
}

export function *bucketSort(arr){
  let arrCopy = [...arr];
  let len = arrCopy.length;

  let buckets = [];
  let bucketSize = Math.floor(Math.max(...arrCopy)/10);
  for(let i = 0; i < bucketSize+1; ++i){
    buckets.push([]);
  }

  for(let i = 0; i<len; ++i){
    let pos = Math.floor(arrCopy[i]/10);
    buckets[pos].push(arrCopy[i]);
    let newArr = [...[ ].concat(...buckets),...arrCopy.slice(i+1)];
    yield [...newArr].map(num => filter(num, [...buckets[pos]]));
  }
  yield* insertionSort(buckets);

  arrCopy = [...[ ].concat(...buckets)];
  yield* doneYield(arrCopy);
  yield* defaultYield(arrCopy);
  return;
}