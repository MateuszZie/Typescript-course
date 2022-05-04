class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const stringArr = new ArrayofAnything<string>(["a", "v", "c"]);

const stringArr2 = new ArrayofAnything(["a", "v", "c"]);

function printAything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAything([1, 2, 3]);
