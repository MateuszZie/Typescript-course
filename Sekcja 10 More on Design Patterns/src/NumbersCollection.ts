import { Sortable, Sorter } from "./Sorter";

export class NumbersCollection extends Sorter implements Sortable {
  constructor(public data: number[]) {
    super();
  }

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
