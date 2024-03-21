function heapsort() {
}

function heapify(arr, i, n) {
  let larger = i;
  const left = i * 2 + 1
  const right = i * 2 + 2

  console.log(i, left, right, n)
  if (left < n && arr[left] >= arr[larger]) {
    larger = left;
  }

  if (right < n && arr[right] >= arr[larger]) {
    larger = right;
  }

  if (i !== larger) {
    const aux = arr[i];
    arr[i] = arr[larger];
    arr[larger] = aux;

    heapify(arr, larger, n)
  }
}

function buildMaxHeap(arr) {
  const n = arr.length;
  let i = Math.floor(n/2) -1;
  for(i; i >= 0; i--) {
    heapify(arr, i, n);
  }
}

const test1 = [5,2,3,4,1,6,7];

buildMaxHeap(test1);
console.log(test1);

