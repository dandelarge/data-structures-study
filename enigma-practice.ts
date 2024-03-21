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
  regularAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  rotorConfig: string;
  rotatedAlphabet: string;
  rotatedConfig: string;
  position: number;

  constructor(config: string, position = 1) {
    this.rotorConfig = config;
    this.position = position;
    this.rotatedAlphabet = this.regularAlphabet;
    this.rotatedConfig = this.rotorConfig;
  }

  forward(index: number) {
    const letter = this.rotatedAlphabet[index - 1];
    const result = this.rotatedConfig.indexOf(letter) + 1;
    return result;
  }

  backward(index: number) {
    const letter = this.rotatedConfig[index - 1];
    const result = this.rotatedAlphabet.indexOf(letter) + 1;
    return result;
  }

  rotate() {
    this.position = this.position === 26 ? 1 : this.position + 1;
    const alphabetArr = this.regularAlphabet.split('');
    const configArr = this.rotorConfig.split('');

    for (let i = 1; i < this.position; i++) {
      const letter = alphabetArr.shift();
      const configLetter = configArr.shift() as string;

      if (letter) {
        alphabetArr.push(letter);
        configArr.push(configLetter);
      }
    }
    this.rotatedAlphabet = alphabetArr.join('');
    this.rotatedConfig = configArr.join('');
  }

  get currentPosition() {
    return this.position;
  }

  set currentPosition(position: number) {
    this.position = position - 1;
    this.rotate();
  }
}

class Reflector {
  regularAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  reflectorString = 'EJMZALYXVBWFCRQUONTSPIKHGD';

  forward(index: number) {
    const letter = this.reflectorString[index - 1];
    const result = this.regularAlphabet.indexOf(letter) + 1;
    return result;
  }
}

class SwitchBoard {
  dictionary: Map<string, string>;

  constructor(config: SwitchboardConfig) {
    //  [['A', 'B'], ['C', 'D']] --> [['A', 'B'], ['B', 'A'], ['C', 'D'], ['D', 'C']]
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
  rotor1: Rotor;
  rotor2: Rotor;
  rotor3: Rotor;

  constructor(
    switchboard?: SwitchBoard,
    reflector?: Reflector,
    rotor1?: Rotor,
    rotor2?: Rotor,
    rotor3?: Rotor
  ) {
    this.switchboard = switchboard || new SwitchBoard([]);
    this.reflector = reflector || new Reflector();
    this.rotor1 = rotor1 || new Rotor(rotorConfig1);
    this.rotor2 = rotor2 || new Rotor(rotorConfig2);
    this.rotor3 = rotor3 || new Rotor(rotorConfig3);
  }

  encrypt(letter: string) {
    const swappedLetter = this.switchboard.swap(letter);
    const swappedNumber = lettersToNumbers.get(swappedLetter) as number;
    const rotor1Number = this.rotor1.forward(swappedNumber);
    const rotor2Number = this.rotor2.forward(rotor1Number);
    const rotor3Number = this.rotor3.forward(rotor2Number);
    const reflectedNumber = this.reflector.forward(rotor3Number);
    const rotor3BackwardNumber = this.rotor3.backward(reflectedNumber);
    const rotor2BackwardNumber = this.rotor2.backward(rotor3BackwardNumber);
    const rotorBackwardNumber = this.rotor1.backward(rotor2BackwardNumber);
    const returnLetter = numbersToLetters.get(rotorBackwardNumber) as string;
    const swappedBackLetter = this.switchboard.swap(returnLetter);


    rotor1.rotate();
    if (this.rotor1.currentPosition === 26) {
      rotor2.rotate();
    }

    if (this.rotor2.currentPosition === 26 && rotor1.currentPosition === 26) {
      rotor3.rotate();
    }

    return swappedBackLetter;
  }
}



const switchboard = new SwitchBoard([['A', 'B'], ['C', 'D']]);
const rotor1 = new Rotor(rotorConfig1);
const rotor2 = new Rotor(rotorConfig2);
const rotor3 = new Rotor(rotorConfig3);

const reflector = new Reflector();
const enigma = new EnigmaMachine(switchboard, reflector, rotor1, rotor2, rotor3);

console.log(enigma.encrypt('C'));
console.log(enigma.encrypt('G'));
console.log(enigma.encrypt('L'));
console.log(enigma.encrypt('R'));


