function fizzbuzz(n) {
  for(let i = 1; i<=n; i++) {
    let word = '';
    if (i % 3 === 0) {
      word += 'fizz';
    }
    if (i % 5 === 0) {
      word += 'buzz'
    }
    if (word !== '') {
      console.log(word)
    } else {
      console.log(i)
    }
  }
}

fizzbuzz(30);
