const add = (a: number, b: number): number => {
  return a + b;
};
function substract(a: number, b: number): number {
  return a - b;
}
const divide = function (a: number, b: number): number {
  return a / b;
};

const logger = (message: string): void => {
  console.log(message);
};

const throwError = (message: string): never => {
  throw new Error(message);
};

const throwErrorIf = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};
