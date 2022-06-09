@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formatedColor(): string {
    return `This color is ${this.color}`;
  }

  @logError("error in pilot method")
  pilot(
    @parametrDecorator first: string,
    @parametrDecorator second: string
  ): void {
    throw new Error();
    console.log("swish");
  }
}

function testDecorator(target: any, key: string): void {
  console.log(key);
}

function parametrDecorator(target: any, key: string, index: number): void {
  console.log(key, index);
}

function classDecorator(constructor: Function): void {
  console.log(constructor);
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
