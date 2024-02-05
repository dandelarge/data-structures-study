const arr = [1,3,5,4,6,0,2]

const bubbleSort = (arr) => {
    let temp;
    for(let i= 0; i < arr.length - 1; i++){
        for(let j=i+1; j < arr.length; j++){
            if(arr[i]>arr[j]){
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            } 
        }
    }
    console.log(arr) 
}
console.log('arr', arr);
bubbleSort(arr);

const arr2 = [10,6,2,5,3,90,100]
console.log('arr2', arr2)
bubbleSort(arr2);

