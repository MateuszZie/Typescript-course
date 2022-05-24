import { User } from "./models/User";

const user = User.buildUser({ id: 1, name: "mateusz", age: 30 });

user.on("change", () => {
  console.log(user);
});

user.fetch();
