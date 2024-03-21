// Fn = F(n - 1) + F(n -2)


function fib(n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5))
console.log(fib(1))
console.log(fib(2))
console.log(fib(0))
console.log(fib(7))
