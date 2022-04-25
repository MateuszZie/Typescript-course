import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftElement: number, rightElement: number): boolean {
    return (
      this.data[leftElement].toLowerCase() >
      this.data[rightElement].toLowerCase()
    );
  }

  swap(leftElement: number, rightElement: number): void {
    const charakters = this.data.split("");
    const leftHand = charakters[leftElement];
    charakters[leftElement] = charakters[rightElement];
    charakters[rightElement] = leftHand;
    this.data = charakters.join("");
  }
}
