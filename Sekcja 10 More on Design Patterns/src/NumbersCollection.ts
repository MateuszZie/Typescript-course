export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftElement: number, rightElement: number): boolean {
    return this.data[leftElement] > this.data[rightElement];
  }

  swap(leftElement: number, rightElement: number): void {
    const leftHand = this.data[leftElement];
    this.data[leftElement] = this.data[rightElement];
    this.data[rightElement] = leftHand;
  }
}
