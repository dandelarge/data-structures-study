function swap(arr, i, j) {
  let temp = arr[i];
  console.log("swap")
  arr[i] = arr[j];
  arr[j] = temp;
}
function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest])
    largest = left;
  if (right < n && arr[right] > arr[largest])
    largest = right;
  if (largest !== i) {
    swap(arr, i, largest);
    heapify(arr, n, largest);
  }
}
const arr = [12, 11, 13, 5, 6, 7, 18, 26, 97, 15, 3, 4];
const i = Math.floor(arr.length / 2 - 1)
function buildMaxHeap(arr, n){
let i = Math.floor(arr.length / 2 - 1)
for(i; i>= 0; i--){
    heapify(arr,n,i)
  }
}
function heapSort(arr){
  buildMaxHeap(arr, arr.length)
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;
    buildMaxHeap(arr, i)
  }
}
heapSort(arr)
console.log(arr)






