fruits = ["apple", "banana", "cherry", "date", "elderberry"]

def lazy_index_finder(array, value)
  return "array is empty" if array.empty?

  array.index(value) || "not present"
end

def index_finder(array, value)
  # return if array is empty before starting the loop
  return "array is empty" if array.empty?

  # define n to 0
  n = 0
  loop do
    # return "not present" if reached end of array
    return "not present" if n > array.length

    # return index if value is found
    return n if array[n] == value

    # increment n for next iteration
    n += 1
  end
end

def index_finder_pre_refactor(array, value)
  n = 0
  return "array is empty" if array.empty?

  loop do
    if n > array.length
      return "not present"
    elsif array[n] == value
      return n
    else
      n += 1
    end
  end
end

puts index_finder_pre_refactor(fruits, "banana") # => 1
puts index_finder_pre_refactor(fruits, "durian") # => "not present
puts index_finder_pre_refactor([], "durian") # => "array is empty"

puts "\n------Array-----"
  puts "fruits = #{fruits}"
puts "\n------lazy_index_finder-----"
  puts "lazy_index_finder(fruits, 'banana') \# => #{lazy_index_finder(fruits, "banana")}" # => 1
  puts "lazy_index_finder(fruits, 'durian') \# => #{lazy_index_finder(fruits, "durian")}" # => "not present
  puts "lazy_index_finder([], 'durian')     \# => #{lazy_index_finder([], "durian")}" # => "not present

puts "\n------index_finder------"
  puts "index_finder(fruits, 'banana')     \# => #{index_finder(fruits, "banana")}" # => 1
  puts "index_finder(fruits, 'elderberry') \# => #{index_finder(fruits, "elderberry")}" # => 4
  puts "index_finder(fruits, 'durian')     \# => #{index_finder(fruits, "durian")}" # => "not present
  puts "index_finder([], 'durian')         \# => #{index_finder([], "durian")}" # => "not present

puts "\n------index_finder_pre_refactor------"
  puts "index_finder_pre_refactor(fruits, 'banana') \# => #{index_finder_pre_refactor(fruits, "banana")}" # => 1
  puts "index_finder_pre_refactor(fruits, 'durian') \# => #{index_finder_pre_refactor(fruits, "durian")}" # => "not present
  puts "index_finder_pre_refactor([], 'durian')     \# => #{index_finder_pre_refactor([], "durian")}" # => "array is empty"