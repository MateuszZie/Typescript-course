interface Vehicle {
  name: string;
  year: number;
  brooken: boolean;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  brooken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name, vehicle.year, vehicle.brooken);
};

printVehicle(oldCivic);
