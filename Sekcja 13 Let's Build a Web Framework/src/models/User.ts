import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { AxiosResponse } from "axios";

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

  get get() {
    return this.attributes.get;
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  set(update: T): void {
    this.attributes.set(update);
    this.trigger("change");
  }

  fetch(): void {
    const id = this.get("id");

    if (!id) {
      throw new Error("Cant fetch without id");
    }

    this.sync.fetch(id).then((response: AxiosResponse) => {
      this.attributes.set(response.data);
    });
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((response: AxiosResponse) => {
        this.trigger("save");
      })
      .catch(() => {
        this.trigger("error");
      });
  }
}
