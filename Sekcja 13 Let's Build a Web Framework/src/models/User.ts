import { Attributes } from "./Attributes";
import { UserCollections } from "./CollectionsUser";
import { Eventing } from "./Eventing";
import { Model } from "./Model";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attr: UserProps): User {
    return new User(new Attributes(attr), new Sync(rootUrl), new Eventing());
  }

  static buildUsersCollection(): UserCollections {
    return new UserCollections(rootUrl, (json: UserProps) =>
      User.buildUser(json)
    );
  }

  setRandomAge(): void {
    const age = Math.round(Math.random() * 100);
    this.set({ age });
  }
}
