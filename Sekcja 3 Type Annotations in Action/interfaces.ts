interface Vehicle {
  name: string;
  year: number;
  brooken: boolean;
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  brooken: true,
  summary(): string {
    return `${this.name + " " + this.year + " " + this.brooken}`;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary);
};

printVehicle(oldCivic);
