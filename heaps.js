function heapify(arr, i, n) {
  const l = i*2 + 1;
  const r = i*2 + 2;
  let larger = i;

  if (l < n && arr[larger] <= arr[l]) {
    larger = l;
  }

  if (r < n && arr[larger] <= arr[r]) {
    larger = r;
  }

  if (i !== larger) {
    const aux = arr[i];
    arr[i] = arr[larger];
    arr[larger] = aux;

    heapify(arr, larger, n);
  }
}

function buildMaxHeap(arr, n) {
  let i = Math.floor(n / 2 - 1);
  for(i; i >= 0; i--) {
    heapify(arr, i, n);
  }
}

function heapsort(arr) {
  for (let n = arr.length; n > 0; n--) {
    buildMaxHeap(arr, n);
    const aux = arr[n - 1];
    arr[n - 1] = arr[0];
    arr[0] = aux;
  }
}

function heapsortBenchmark(arr){
  let operations = 0;

  function heapify(arr, i, n) {
    const l = i*2 + 1;
    const r = i*2 + 2;
    let larger = i;

    if (l < n && arr[larger] <= arr[l]) {
      larger = l;
    }

       if (r < n && arr[larger] <= arr[r]) {
      larger = r;
    }

    if (i !== larger) {
      operations++;
      const aux = arr[i];
      arr[i] = arr[larger];
      arr[larger] = aux;

      heapify(arr, larger, n);
    }
  }

  function buildMaxHeap(arr, n) {
    let i = Math.floor(n / 2 - 1);
    for(i; i >= 0; i--) {
      heapify(arr, i, n);
    }
  }

  function heapsort(arr) {
    for (let n = arr.length; n > 0; n--) {
      operations++;
      buildMaxHeap(arr, n);
      const aux = arr[n - 1];
      arr[n - 1] = arr[0];
      arr[0] = aux;
    }
  }
  heapsort(arr);
  console.log(`
    operations: ${operations}
  `);
}

function bubblesortBenchmark(arr) {
  let operations = 0;

  function sort(arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = 0; j < arr.length; j++) {
        operations++;
        if (arr[i] > arr[j]) {
          const aux = arr[i];
          arr[i] = arr[j];
          arr[j] = aux;
        }
      }
    }
  }

  sort(arr);
  console.log(`
    operations: ${operations}
  `);

}

const test1 = [1,2,3];
const test2 = [5,2,1];
const test3 = [89,2,1,3,7,
  8,56,45,6,12,
  5,4,34,12, 33,14];


const test4 = [89,2,1,3,7,
  8,56,45,6,12,
  5,4,34,12,33,14];

heapsortBenchmark(test3);
bubblesortBenchmark(test4);
console.log(test3);

console.log(test4);
