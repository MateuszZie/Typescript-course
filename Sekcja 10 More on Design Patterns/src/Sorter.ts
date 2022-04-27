export interface Sortable {
  length: number;
  compare(leftIndex: number, rightInde: number): boolean;
  swap(leftIndex: number, rightInde: number): void;
}

export abstract class Sorter {
  abstract length: number;
  abstract compare(leftIndex: number, rightInde: number): boolean;
  abstract swap(leftIndex: number, rightInde: number): void;

  sort(): void {
    const { length } = this;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1);
        }
      }
    }
  }
}
