import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { quickSort } from "./quickSort";
import { mergeSort } from "./mergeSort";
import { heapSort } from "./heapSort";
import { radixSort } from "./radixSort";
import { bucketSort } from "./bucketSort";
import { shellSort } from "./shellSort";
import { cocktailSort } from "./cocktailSort";

export const algorithms = [
  { name: "Bubble Sort", key: 0, method: bubbleSort },
  { name: "Insertion Sort", key: 1, method: insertionSort },
  { name: "Selection Sort", key: 2, method: selectionSort },
  { name: "Quick Sort", key: 3, method: quickSort },
  { name: "Merge Sort", key: 4, method: mergeSort },
  { name: "Heap Sort", key: 5, method: heapSort },
  { name: "Radix Sort", key: 6, method: radixSort },
  { name: "Bucket Sort", key: 7, method: bucketSort },
  { name: "Shell Sort", key: 8, method: shellSort },
  { name: "Cocktail Sort", key: 9, method: cocktailSort }
];
