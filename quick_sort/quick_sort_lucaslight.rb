arr = [6, 5, 2, 3, 1, 4]

def quick_sort(array)
  return array if array.size <= 1

  pivot = array.last
  left = 0
  right = 0

  while right < array.size
    if array[right] < pivot
      array[left], array[right] = array[right], array[left]
      left += 1
    end
    right += 1
  end

  # Move pivot to its final place
  array[left], array[right - 1] = array[right - 1], array[left]

  # Sort the two halves
  array[0...left] = quick_sort(array[0...left])
  array[left + 1..] = quick_sort(array[left + 1..])

  array
end

arr = quick_sort(arr)
puts "Sorted array: #{arr}"

# https://excalidraw.com/#json=aDJy097HtK5-xwQ9PF1fE,J9hM3uQB30wezkRcVeEJ3Q
