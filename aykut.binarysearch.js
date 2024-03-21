// low, high and pivot are indexes
function binarySearch(arr,search,low, high){
  console.log(`
    low: ${low}
    high: ${high}

    `);
  const pivot = Math.floor((high-low)/ 2) + low;

  console.log(`
    pivot: ${pivot},
    value in arr[pivot]: ${arr[pivot]}
    search value: ${search}
    `);
  if(arr[pivot]=== search){
    return pivot
  }
  if(arr[pivot] < search){
    return binarySearch(arr,search, pivot+1, high)
  }
  if(arr[pivot] > search){
    return binarySearch(arr,search, low, pivot-1)
  }
  if(high <= low){
    return -1
  }
}


const arr = [2,3,4,5,6,7,8,9,10,11,12]; 
const result = binarySearch(arr,3,0,arr.length-1)
console.log(result)
