import { User, UserProps } from "./models/User";

const user = new User<UserProps>({ id: 1, name: "mat", age: 22 });

console.log(user.get("name"));

user.on("click", () => {
  console.log("Clicked");
});

user.trigger("click");
