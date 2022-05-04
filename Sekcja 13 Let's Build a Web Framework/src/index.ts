import { User } from "./models/User";

const user = new User({ age: 36, name: "Mateusz" });

console.log(user.get("name"));
console.log(user.get("age"));
