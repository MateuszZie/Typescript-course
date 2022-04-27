import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([3, -2, 5, 8, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

const characterCollection = new CharactersCollection("abDefAfg");
characterCollection.sort();
console.log(characterCollection.data);

const linkedList = new LinkedList();
linkedList.add(34);
linkedList.add(-5);
linkedList.add(345);
linkedList.add(-2);
linkedList.sort();
linkedList.print();
