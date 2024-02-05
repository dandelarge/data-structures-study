def bubble_sort!(array)
  n = array.length
  loop do
    swapped = false

    (n-1).times do |i|
      if array[i] > array[i+1]
        array[i], array[i+1] = array[i+1], array[i]
        swapped = true
      end
    end

    break if not swapped
  end

  array
end

arr = [5,3,2,4,1]
arr2 = [90,100,10,78,5,0]

print arr
print bubble_sort! arr
print arr2
print bubble_sort! arr2

