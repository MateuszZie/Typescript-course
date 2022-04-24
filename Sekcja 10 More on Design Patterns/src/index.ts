import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([3, -2, 5, 8, 4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);
