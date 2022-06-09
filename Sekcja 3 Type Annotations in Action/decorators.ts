class Boat {
  color: string = "red";

  get formatedColor(): string {
    return `This color is ${this.color}`;
  }

  @logError
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function logError(target: any, key: string, desc: PropertyDescriptor): void {
  const method = desc.value;

  desc.value = function () {
    try {
      method();
    } catch {
      console.log("error in pilot method");
    }
  };
}

new Boat().pilot();
