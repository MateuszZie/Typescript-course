class Vehicle {
  protected hunk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.hunk();
  }
}

const car = new Car();

car.startDriving();
