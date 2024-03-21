/**
  *  @typedef {object} Queue
  *  @property {number} head
  *  @property {number} tail
  *  @property {number} size
  *  @property {Array} elements
  *  @property {function} enqueue
  *  @property {function} dequeue
  *  @property {boolean} isEmpty
**/

/**
  * @return {Queue} 
**/
function makeQueue() {
  return {
    head: 0,
    tail: 0,
    get size() {
      return this.tail - this.head
    },
    elems: {},
    enqueue(value) {
      this.elems[this.tail] = value;
      this.tail++;
    },
    dequeue() {
      if (this.isEmpty) return;
      const item = this.elems[this.head];
      delete this.elems[this.head];
      this.head++;
      return item;
    },
    get elements() {
      return Object.values(this.elems);
    },
    get isEmpty() {
      return this.size === 0;
    }
  }
}

const q = makeQueue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(6);

console.log(q.elements);

const first = q.dequeue();
console.log(first);
