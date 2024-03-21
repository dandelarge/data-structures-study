/**
  * @param {number[]} arr
**/
function quicksort(arr, low = 0, high = arr.length -1) {
  const pivot = partition(arr, low, high);
  console.log(`
    low: ${low}
    high: ${high}
    pivot: ${pivot}
  `);
  if(low < high) {
    quicksort(arr, low, pivot - 1);
    quicksort(arr, pivot, high);
  }
  return arr;
}

/**
  * @param {number[]} arr
  * @returns {number}
**/
function partition(arr, low = 0, high = arr.length -1) {
  const pivot = high;
  let pointer = low;
  for (let i=low; i < high; i++) {
    if (arr[i] < arr[pivot]) {
      const aux = arr[i];
      arr[i] = arr[pointer];
      arr[pointer] = aux;
      pointer++;
    }
  }
  const aux = arr[pivot];
  arr[pivot] = arr[pointer];
  arr[pointer] = aux;
  
  return pointer;
}

const arr =[1,3,2,10,5,9,4];
console.log(arr)
quicksort(arr);
console.log(arr);
