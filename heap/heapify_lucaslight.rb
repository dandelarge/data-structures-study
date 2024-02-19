arr = [8,5,4,2,3,1,6,7,9,10]


def heapify(array, i, n)
  left = 2*i + 1
  right = 2*i + 2
  largest = i

  largest = left if left < n && array[left] >= array[largest]
  largest = right if right < n && array[right] >= array[largest]

  if largest != i
    swap(array, largest, i)
    heapify(array, largest, n)
  end
end

def swap(array, i, largest)
  array[i], array[largest] = array[largest], array[i]
  puts "Swapping #{array[i]} with #{array[largest]}"
end

def build_max_heap(array)
  (array.size/2 - 1).downto(0) do |i|
    heapify(array, i, array.size)
  end
end

def heap_sort(array)
  puts "initial array: #{array}"
  build_max_heap(array)
  puts "Max Heap: #{array}"
  (array.size - 1).downto(1) do |i|
    array[0], array[i] = array[i], array[0]
    heapify(array, 0, i)
  end
  puts "Sorted array: #{array}"
  array
end

heap_sort(arr) 
