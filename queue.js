/**
  * Queue type definition
  * @typedef {Object} Queue
  * @property {number} head
  * @property {number} tail
  * @property {number} length
  * @property {Array} elements
  * @property {function} enqueue
  * @property {function} dequeue

/**
  * @returns {Queue} builds a new queue
**/
const newQueue = () => {
  return {
    head: 0,
    tail: 0,
    elems: {},
    get elements() {
      return Object.values(this.elems);
    },
    get length() {
      return this.tail - this.head;
    },
    enqueue(value) {
      this.elems[this.tail] = value;
      this.tail++;
    },
    dequeue() {
      const item = this.elems[this.head];
      delete this.elems[this.head];
      this.head++;
      return item
    }
  }
}

const queue = newQueue();

queue.enqueue(1);
queue.enqueue(5);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(9);
queue.enqueue(6);
queue.enqueue(13);
queue.enqueue(28);
console.log(queue.elements)
console.log(queue.length)
console.log(queue.dequeue())
console.log(queue.elements)
console.log(queue.length)
