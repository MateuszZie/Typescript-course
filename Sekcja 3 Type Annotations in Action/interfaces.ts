const oldCivic = {
  name: "civic",
  year: 2000,
  brooken: true,
};

const printVehicle = (vechicle: {
  name: string;
  year: number;
  brooken: boolean;
}): void => {
  console.log(vechicle.name, vechicle.year, vechicle.brooken);
};

printVehicle(oldCivic);
