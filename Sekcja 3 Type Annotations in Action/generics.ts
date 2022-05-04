class ArrayofAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const stringArr = new ArrayofAnything<string>(["a", "v", "c"]);

const stringArr2 = new ArrayofAnything(["a", "v", "c"]);
