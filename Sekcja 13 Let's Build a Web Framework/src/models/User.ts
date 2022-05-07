import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = "http://localhost:3000/users";

export class User<T> {
  events: Eventing = new Eventing();
  sync: Sync<T> = new Sync(rootUrl);
  attributes: Attributes<T>;

  constructor(attr: T) {
    this.attributes = new Attributes(attr);
  }
}
