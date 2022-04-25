import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const numbersCollection = new NumbersCollection([3, -2, 5, 8, 4]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(sorter.collection);

const characterCollection = new CharactersCollection("abDefAfg");
const sorter2 = new Sorter(characterCollection);
sorter2.sort();
console.log(sorter2.collection);
