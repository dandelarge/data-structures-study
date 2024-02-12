function binary_search(arr: number[], search: number, low = 0, high = arr.length -1) {
  const pivot = Math.floor((high - low) / 2) + low;
  console.log(`
              search: ${search}
              low: ${low}
              high: ${high}
              pivot: ${pivot}
              value in ${pivot}: ${arr[pivot]}`);

  if (arr[pivot] === search) {
    return pivot
  }

  if(high <= low) {
    return -1;
  }

  if (arr[pivot] < search) {
    return binary_search(arr, search, pivot + 1, high);
  } 

  if (arr[pivot] > search) {
    return binary_search(arr, search, low, pivot - 1);
  } 
  return -1;
}

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


console.log(binary_search(arr, 7));
console.log(binary_search(arr, 25));

// 0, 19, 9
// 0, 9, 4
// 4, 9, 4
