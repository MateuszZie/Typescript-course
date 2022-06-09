class Boat {
  color: string = "red";

  get formatedColor(): string {
    return `This color is ${this.color}`;
  }

  @testDecorators
  pilot(): void {
    console.log("swish");
  }
}

function testDecorators(target: any, key: string): void {
  console.log("Target ", target);
  console.log("Key ", key);
}
