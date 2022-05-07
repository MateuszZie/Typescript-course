import { User } from "./models/User";

const user = new User({ id: 1 });
const user2 = new User({ name: "new recrd", age: 89 });

user.set({ age: 36 });

// user.sync.save();

// user2.save();
