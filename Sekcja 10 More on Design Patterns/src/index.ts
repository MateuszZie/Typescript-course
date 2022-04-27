import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
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

const linkedList = new LinkedList();
linkedList.add(34);
linkedList.add(-5);
linkedList.add(345);
linkedList.add(-2);
const sorter3 = new Sorter(linkedList);
sorter3.sort();
linkedList.print();
