class Vehicle {
  constructor(public color: string) {}

  protected hunk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vroom");
  }

  startDriving(): void {
    this.drive();
    this.hunk();
  }
}

const car = new Car(4, "orange");

car.startDriving();
console.log(car.color, car.wheels);
