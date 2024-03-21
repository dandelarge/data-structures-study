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
const regularAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const rotorConfig1 = 'EKMFLGDQVZNTOWYHXUSPAIBRCJ';
const rotorConfig2 = 'AJDKSIRUXBLHWTMCQGZNPYFVOE';
const rotorConfig3 = 'BDFHJLCPRTXVZNYEIWGAKMUSQO';

type SwitchboardConfig = [string, string][];

class Rotor {
  rotorString: string;
  position: number;

  constructor(rotorString: string, position?: number) {
    this.rotorString = rotorString;
    this.position = position || 0;
  }

  forward(index: number) {
    let result: number;
    if (index + this.position > 26) {
      result = this.rotorString.indexOf(regularAlphabet[index + this.position - 26]);
    } else {
      result = this.rotorString.indexOf(regularAlphabet[index + this.position - 1]);
    }
    result = result + 1 + this.position;
    console.log('');
    console.log('=====================');
    console.log('Rotor at position ' + (this.position + 1) + ' :');
    console.log('Going forward')
    console.log('Input Index: ' + index);
    console.log('Input Letter: ' + numbersToLetters.get(index));
    console.log('Output Index: ' + result);
    console.log('Output Letter: ' + numbersToLetters.get(result));
    return result;
  }

  backward(index: number) {
    let result: number;

    if (index + this.position > 26) {
      result = regularAlphabet.indexOf(this.rotorString[index - this.position - 26]);
    } else {
      result = regularAlphabet.indexOf(this.rotorString[index - 1 + this.position]);
    }

    result = result + 1 + this.position;
    console.log('');
    console.log('=====================');
    console.log('Rotor at position ' + (this.position + 1) + ' :');
    console.log('Going backward')
    console.log('Input Index: ' + index);
    console.log('Input Letter: ' + numbersToLetters.get(index));
    console.log('Output Index: ' + result);
    console.log('Output Letter: ' + numbersToLetters.get(result));
    this.position++;
    return result;
  }

  get offset() {
    return this.position + 1;
  }

  set offset(index: number) {
    this.position = index - 1;
  }
}

class Reflector {
  regularAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  reflectorString = 'EJMZALYXVBWFCRQUONTSPIKHGD';

  forward(index: number) {
    const result = this.reflectorString.indexOf(regularAlphabet[index - 1]) + 1;
    return result;
  }

}

class SwitchBoard {
  dictionary: Map<string, string>;

  constructor(config: SwitchboardConfig) {
    const fullConfig = config.reduce((acc, [key, value]) => {
      acc.push([key, value]);
      acc.push([value, key]);
      return acc;
    }, [] as [string, string][]);
    this.dictionary = new Map(fullConfig);
  }

  get config() {
    return this.dictionary;
  }

  swap(letter: string) {
    return this.dictionary.get(letter) || letter;
  }
}

class EnigmaMachine {
  switchboard: SwitchBoard;
  reflector: Reflector;

  constructor(switchboard?: SwitchBoard) {
    this.switchboard = switchboard || new SwitchBoard([]);
    this.reflector = new Reflector();
  }

  encrypt(letter: string) {
    let encryptedLetter = this.switchboard.swap(letter);
    const currentIndex = lettersToNumbers.get(encryptedLetter) as number;
    const reflectedIndex = this.reflector.forward(currentIndex);
    const reflectedLetter = numbersToLetters.get(reflectedIndex) as string;
    encryptedLetter = this.switchboard.swap(reflectedLetter);
    return encryptedLetter;
  }

}

const switchboard = new SwitchBoard([['A', 'B'], ['C', 'D']]);
const enigma = new EnigmaMachine();

console.log(enigma.encrypt('A'));
console.log(enigma.encrypt('B'));
console.log(enigma.encrypt('C'));
console.log(enigma.encrypt('D'));
console.log(enigma.encrypt('E'));
console.log(enigma.encrypt('J'));
console.log(enigma.encrypt('M'));
console.log(enigma.encrypt('Z'));

