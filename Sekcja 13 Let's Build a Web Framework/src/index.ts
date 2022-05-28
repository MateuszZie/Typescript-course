import { User } from "./models/User";
import { UserForm } from "./views/Userform";

const user = User.buildUser({ name: "Name", age: 20 });

const userForm = new UserForm(document.getElementById("root"), user);

userForm.render();
