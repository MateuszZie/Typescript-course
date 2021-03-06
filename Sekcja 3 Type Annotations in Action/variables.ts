let apples = 5;
let speed: string = "fast";
let hasName: boolean = true;

let notMouch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "blue", "green"];

class Car {}

let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => console.log(i);

const json = '{"x": 10, "y": 20}';
const coordiantes: { x: number; y: number } = JSON.parse(json);
console.log(coordiantes);

let words = ["red", "blue", "green"];
let foundWord: boolean;
for (let i = 0; i < words.length; i++) {
  if (words[i] === "blue") {
    foundWord = true;
  }
}

let numbers = [-1, -20, 10];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
