import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { Sync } from "./Sync";

interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(new Attributes(attr), new Sync(rootUrl), new Eventing());
  }
}
