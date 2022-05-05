import { User } from "./models/User";

const user = new User({});

user.on("click", () => {
  console.log("change #1");
});
user.on("click", () => {
  console.log("change #2");
});
user.on("mouseone", () => {
  console.log("change #3");
});

user.trigger("click");
