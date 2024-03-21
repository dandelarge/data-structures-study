function heapify(arr, i, n){
  const leftLeaf = i*2+1;
  const rightLeaf = i*2+2;
  let largerLeaf = i;

  console.log(`
    i: ${i}
    left: ${leftLeaf}
    right: ${rightLeaf}
    `);
  
  if(arr[largerLeaf] <= arr[leftLeaf]){
    largerLeaf = leftLeaf
  }
  
  if(arr[largerLeaf] <= arr[rightLeaf]){
    largerLeaf = rightLeaf
  }
  
  if(i !== largerLeaf){
    const aux = arr[i];
    arr[i] = arr[largerLeaf];
    arr[largerLeaf] = aux;
    heapify(arr,largerLeaf,n);
  }
}

function buildMaxHeap(arr,n){
  let i = Math.floor(arr.length/2)-1;
  console.log(i);
  for(i; i >= 0; i--){
    heapify(arr,i,n)
  }
}

const arr = [3,1,2,4,5,6,7];

buildMaxHeap(arr, arr.length)

console.log(arr)






