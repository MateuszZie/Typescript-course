import axios, { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";

export class Collections<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(private rootUrl: string, private deseriaizable: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.models.push(this.deseriaizable(value));
      });
    });
    this.trigger("change");
  }
}
