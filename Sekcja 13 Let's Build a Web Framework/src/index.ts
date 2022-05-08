import { User, UserProps } from "./models/User";

const user = new User<UserProps>({ id: 1, name: "mateusz", age: 30 });

console.log(user.get("id"));

user.on("click", () => {
  console.log("Clicked");
});

user.on("change", () => {
  console.log("User was changed");
});

user.trigger("click");

user.set({ name: "mateusz", age: 36 });

const user2 = new User<UserProps>({ id: 2 });

user2.fetch();

console.log(user2);

user.save();
