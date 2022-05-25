import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { User, UserProps } from "./User";

export class Collections {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: UserProps) => {
        this.models.push(User.buildUser(value));
      });
    });
    this.trigger("change");
  }
}
