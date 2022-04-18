class Vehicle {
  drive(): void {
    console.log("chogga chugga");
  }

  hunk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle();

vehicle.drive();
vehicle.hunk();
