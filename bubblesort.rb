def bubblesort(arr)
  for i in 0 ... arr.size
    for j in i ... arr.size
      if arr[i] > arr[j]
        aux = arr[i]
        arr[i] = arr[j]
        arr[j] = aux
      end
    end
  end
  puts arr
end

bubblesort [1,5,3,2,4]
