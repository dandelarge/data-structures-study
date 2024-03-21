function benchMark(func, limit) {
  for (let i = 1; i <= limit; i++) {
    let array = new Array(i);
    for (let j = 0; j < array.length; j++) {
      const number = Math.round(Math.random() * 100);
      array[j] = number;
    }
    console.log(array);
  }
}

benchMark(null, 10);


