import { Collections } from "./models/Collections";
import { User, UserProps } from "./models/User";

const collection = new Collections<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
