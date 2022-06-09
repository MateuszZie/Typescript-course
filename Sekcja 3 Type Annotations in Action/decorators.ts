class Boat {
  color: string = "red";

  get formatedColor(): string {
    return `This color is ${this.color}`;
  }

  @logError("error in pilot method")
  pilot(): void {
    throw new Error();
    console.log("swish");
  }
}

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().pilot();
