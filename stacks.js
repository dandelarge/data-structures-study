/**
  * @typedef {Object} Stack
  * @property {number} size
  * @property {Array} elems 
  * @property {function} peek
  * @property {function} push
  * @property {function} pop
  * @property {boolean} isEmpty
**/

/**
  * @function makeStack
  * @returns {Stack}
**/
function makeStack() {
  return {
    elems: [],
    get size() {
      return this.elems.length;
    },
    peek() {
      return this.elems[this.elems.length -1];
    },
    push(value) {
      this.elems.push(value);
    },
    pop() {
      return this.elems.pop()
    },
    get isEmpty() {
      return this.elems.length === 0;
    }
  }
}

const stack = makeStack();

stack.push(1);
stack.push(3);
stack.push(3);
stack.push(5);
stack.push(7);
stack.push(9);
stack.push(13);
console.log(stack.size);
console.log(stack.elems);

const peek = stack.peek();
console.log('peek', peek);

const popped = stack.pop();
console.log(stack.size)
console.log(stack.elems)
