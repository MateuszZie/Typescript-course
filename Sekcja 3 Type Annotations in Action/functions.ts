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

const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

const profile = {
  firstName: "Mateusz",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age, firstName }: { age: number; firstName: string } = profile;
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
