const carMaker = ["ford", "fiat", "bmw", "alfa"];
const dates = [new Date(), new Date()];
const carByMakes: string[][] = [];

const car = carMaker[0];
const myCar = carMaker.pop();

const samArr = carMaker.map((car): string => {
  return car;
});

const importandDates: (Date | string)[] = [];
importandDates.push("2030-05-06");
importandDates.push(new Date());
