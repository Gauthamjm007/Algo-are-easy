import { bubbleSort } from "./bubbleSort";
import { insertionSort } from "./insertionSort";
import { selectionSort } from "./selectionSort";
import { quickSort } from "./quickSort";
import { heapSort } from "./heapSort";
import { shellSort } from "./shellSort";

export const algorithms = [
  { name: "Bubble Sort", key: 0, method: bubbleSort },
  { name: "Insertion Sort", key: 1, method: insertionSort },
  { name: "Selection Sort", key: 2, method: selectionSort },
  { name: "Quick Sort", key: 3, method: quickSort },
  { name: "Heap Sort", key: 4, method: heapSort },
  { name: "Shell Sort", key: 5, method: shellSort }
];
