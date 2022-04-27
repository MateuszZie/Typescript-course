import { Sortable, Sorter } from "./Sorter";

class MyNode {
  next: MyNode | null = null;
  constructor(public value: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  constructor() {
    super();
  }

  head: MyNode | null = null;

  add(data: number): void {
    const node = new MyNode(data);
    if (!this.head) {
      this.head = node;
      return;
    }
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = node;
  }

  at(index: number): MyNode {
    if (!this.head) {
      throw new Error("Out of bound");
    }
    let counter = 0;
    let temp: MyNode | null = this.head;
    while (temp) {
      if (counter === index) {
        return temp;
      }
      temp = temp.next;
      counter++;
    }
    throw new Error("Out of bound");
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let size = 1;
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
      size++;
    }
    return size;
  }

  compare(leftIndex: number, rightInde: number): boolean {
    if (!this.head) {
      throw new Error("List is Empty");
    }
    return this.at(leftIndex).value > this.at(rightInde).value;
  }

  swap(leftIndex: number, rightInde: number): void {
    const leftHand = this.at(leftIndex).value;
    this.at(leftIndex).value = this.at(rightInde).value;
    this.at(rightInde).value = leftHand;
  }

  print(): void {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    let temp: MyNode | null = this.head;
    const arr: number[] = [];
    while (temp) {
      arr.push(temp.value);
      temp = temp.next;
    }
    console.log(arr);
  }
}
