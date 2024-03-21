# string_literal: true

class Queue
  def initialize
    @queue = {}
    @head = 0
    @tail = 0
  end

  def enqueue(item)
    @queue[@tail] = item
    @tail += 1
  end
  
  def dequeue
    return nil if @head == @tail
    
    item = @queue[@head]
    # delete the item from the queue
    @queue.delete(@head)
    @head += 1
    item
  end
  
  def peek
    return nil if @head == @tail
    @queue[@head]
  end

  def empty?
    @head == @tail
  end

  def size
    @tail - @head
  end

  def elements
    @queue.values.join(' ')
  end
end

# Test
queue = Queue.new
puts "------------"
puts "Let's test the queue"
puts queue.empty?
puts "queue.size: #{queue.size}"
puts "------------"
queue.enqueue(1)
puts "queue.elements: #{queue.elements}"
queue.enqueue(2)
puts "queue.elements: #{queue.elements}"
queue.enqueue(3)
puts "queue.elements: #{queue.elements}"
queue.enqueue(4)
puts "queue.elements: #{queue.elements}"
queue.enqueue(5)
puts "queue.elements: #{queue.elements}"
queue.enqueue(6)
puts "queue.elements: #{queue.elements}"
puts "------------"
# puts "queue.elements: #{queue.elements}"
puts "queue.size: #{queue.size}"
puts "Dequeueing..."
puts "------------"
puts queue.dequeue
puts "queue.elements: #{queue.elements}"
puts queue.dequeue
puts "queue.elements: #{queue.elements}"
puts queue.dequeue
puts "queue.elements: #{queue.elements}"
puts "------------"
puts "that's it"
puts "queue.size: #{queue.size}"
puts "queue.peek: #{queue.peek}"
puts "------------"
