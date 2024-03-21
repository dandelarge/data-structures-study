# The Enigma Machine exercise

## The basics
An Enigma machine has three different configurable components:
- A plugboard, that swaps pairs of letters
- The Rotors, that rotate with each key press
- A reflector, that swaps pairs of letters

Each letter corresponds to a number, from 1 to 26.

In escense, the enigma machine is a simple substitution cipher, but the configurable components make it a lot more complex.

Inside, the enigma machine will understand the letters as numbers, and will perform the following operations:
- The plugboard will swap the numbers
- The rotors will rotate
- The rotors will substitute the numbers
- The reflector will swap the numbers
- The rotors will substitute the numbers again
- The plugboard will swap the numbers again

### Mapping the letters to numbers
```ts
const lettersToNumbers = new Map<string, number>([
  ['A', 1],
  ['B', 2],
  ['C', 3],
  ['D', 4],
  ['E', 5],
  ['F', 6],
  ['G', 7],
  ['H', 8],
  ['I', 9],
  ['J', 10],
  ['K', 11],
  ['L', 12],
  ['M', 13],
  ['N', 14],
  ['O', 15],
  ['P', 16],
  ['Q', 17],
  ['R', 18],
  ['S', 19],
  ['T', 20],
  ['U', 21],
  ['V', 22],
  ['W', 23],
  ['X', 24],
  ['Y', 25],
  ['Z', 26],
]);
```

### Mapping the numbers to letters
```ts
const numbersToLetters = new Map<number, string>([
  [1, 'A'],
  [2, 'B'],
  [3, 'C'],
  [4, 'D'],
  [5, 'E'],
  [6, 'F'],
  [7, 'G'],
  [8, 'H'],
  [9, 'I'],
  [10, 'J'],
  [11, 'K'],
  [12, 'L'],
  [13, 'M'],
  [14, 'N'],
  [15, 'O'],
  [16, 'P'],
  [17, 'Q'],
  [18, 'R'],
  [19, 'S'],
  [20, 'T'],
  [21, 'U'],
  [22, 'V'],
  [23, 'W'],
  [24, 'X'],
  [25, 'Y'],
  [26, 'Z'],
]);
```

## The plugboard
When the plugboard is configured, it will swap pairs of letters. For example, if the plugboard is configured to swap A and B, and C and D, the letter A will be swapped by B, and the letter B will be swapped by A. The same goes for C and D.
```ts
type PlugboardConfig = [string, string][];

class PlugBoard {
  dictionary: Map<string, string>;

  constructor(config: PlugboardConfig) {
    const fullConfig = config.reduce((acc, [key, value]) => {
      acc.push([key, value]);
      acc.push([value, key]);
      return acc;
    }, [] as PlugboardConfig);
    this.dictionary = new Map(fullConfig);
  }

  // don't get confused by the getter, it's just a way to make the dictionary read only.
  // this is will be called as plugboard.config (without the parenthesis)
  get config() {
    return this.dictionary;
  }

  swap(letter: string) {
    return this.dictionary.get(letter) || letter;
  }
}
```

### Testing the Plugboard
When we pass a configuration, the plugboard should build a map with the swapped letters.
```ts
const plugboard = new PlugBoard([
  ['A', 'B'],
  ['C', 'D'],
]);

console.log(plugboard.config); // Map(4) { 
//                                  'A' => 'B', 
//                                  'B' => 'A', 
//                                  'C' => 'D',
//                                  'D' => 'C' 
//                                }
```

## The Enigma Machine class
The Enigma Machine class puts all the components together and keeps track of the state of the rotors.

we will implement a encrypt method that will take the letter to encrypt and return the encrypted letter.

```ts
class EnigmaMachine {
  plugboard: PlugBoard;

  constructor(plugboard?: PlugBoard) {
    this.plugboard = plugboard || new PlugBoard([]);
  }

  encrypt(letter: string) {
    let encriptedLetter = this.plugboard.swap(letter);
    return encriptedLetter;
  }
}
```

### Testing the Enigma Machine with only the plugboard
```ts
const plugboard = new PlugBoard([
  ['A', 'B'],
  ['C', 'D'],
]);

const enigmaMachine = new EnigmaMachine(plugboard);
console.log(enigmaMachine.encrypt('A')); // B
console.log(enigmaMachine.encrypt('B')); // A
console.log(enigmaMachine.encrypt('C')); // D
console.log(enigmaMachine.encrypt('D')); // C
```

## The Reflector
The reflector will swap numbers based in a configuration that defines the order of the letters to swap.
We will represent this configuration as a two strings of 26 characters, where the position of the letter in the string represents the number of the letter, and the value of the string represents the number of the letter to swap with.

```ts
class Reflector {
  regularAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  reflectorConfig = 'EJMZALYXVBWFCRQUONTSPIKHGD';

  // index will be a number between 1 and 26
  forward(index: number) {
    // we need to substract 1 because the indexes
    // in the enigma machine are 1 based, and in JS are 0 based
    const inputLetter = this.regularAlphabet[index - 1];

    // and we need to add 1 here for the same reason
    const result = this.reflectorConfig.indexOf(inputLetter) + 1;
    return result;
  }
}
```

### Testing the Reflector
```ts
const reflector = new Reflector();
console.log(reflector.forward(1)); // 5 which is E
console.log(reflector.forward(5)); // 1 which is A
console.log(reflector.forward(26)); // 4 which is D
console.log(reflector.forward(4)); // 26 which is Z
```

### Adding the reflector to the Enigma Machine
```ts
class EnigmaMachine {
  plugboard: PlugBoard;
  reflector: Reflector;

  constructor(plugboard?: PlugBoard) {
    this.plugboard = plugboard || new PlugBoard([]);
    this.reflector = new Reflector();
  }

  encrypt(letter: string) {
    let encriptedLetter = this.plugboard.swap(letter);
    
    // get the number that corresponds to the letter
    const number = lettersToNumbers.get(encriptedLetter) as number;

    // pass the number through the reflector
    const reflectedNumber = this.reflector.forward(number);

    // get the letter that corresponds to the reflected number
    const reflectedLetter = numbersToLetters.get(reflectedNumber) as string;
    
    // swap the reflected letter 
    encriptedLetter = this.plugboard.swap(reflectedLetter);

    return encryptedLetter;
  }
}
```

### Testing the Enigma Machine with the reflector only
```ts
const enigmaMachine = new EnigmaMachine();
console.log(enigmaMachine.encrypt('A')); // E
console.log(enigmaMachine.encrypt('E')); // A
console.log(enigmaMachine.encrypt('Z')); // D
console.log(enigmaMachine.encrypt('D')); // Z
```

### Testing the Enigma Machine with the plugboard and the reflector
```ts
const plugboard = new PlugBoard([
  ['A', 'B'],
  ['C', 'D'],
]);

const enigmaMachine = new EnigmaMachine(plugboard);
console.log(enigmaMachine.encrypt('A')); // E 
console.log(enigmaMachine.encrypt('B')); // J
console.log(enigmaMachine.encrypt('C')); // M
console.log(enigmaMachine.encrypt('D')); // Z

console.log(enigmaMachine.encrypt('E')); // A
console.log(enigmaMachine.encrypt('J')); // B
console.log(enigmaMachine.encrypt('M')); // C
console.log(enigmaMachine.encrypt('Z')); // D
```
