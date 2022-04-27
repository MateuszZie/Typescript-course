import { Sortable, Sorter } from "./Sorter";

export class CharactersCollection extends Sorter implements Sortable {
  constructor(public data: string) {
    super();
  }

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
