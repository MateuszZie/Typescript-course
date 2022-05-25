import { User } from "./models/User";

const collection = User.buildUsersCollection();

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
