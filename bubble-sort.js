
function makeBubbleSort() {
  let counter = 0;
  
  return function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {
        if (counter !== null) {
          counter++;
        }
        if(arr[i] > arr[j]) {
          const aux = arr[i];
          arr[i] = arr[j];
          arr[j] = aux;
        }
      }
    }

    console.log(arr)
    console.log(counter)
    return arr;
  }
}

  arr1 = [1,4,3];
  arr2 = [1,4,3, 10];
  arr3 = [1,4,3, 8, 19];
  arr4 = [1,4,3,10, 19, 78];
  arr5 = [1,4,3, 10, 5, 19, 90];
  arr6 = [1,4,3, 10, 5, 19, 90, 2];


const sort1 = makeBubbleSort();
sort1(arr1);
const sort2 = makeBubbleSort();
sort2(arr2);
const sort3 = makeBubbleSort();
sort3(arr3);
const sort4 = makeBubbleSort();
sort4(arr4);
const sort5 = makeBubbleSort();
sort5(arr5);
const sort6 = makeBubbleSort();
sort6(arr6);
    

