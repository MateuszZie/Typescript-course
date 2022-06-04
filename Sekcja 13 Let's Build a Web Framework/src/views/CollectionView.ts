import { Eventing } from "../models/Eventing";
import axios, { AxiosResponse } from "axios";

export abstract class CollectionView<T, K> {
  collection: T[] = [];
  events: Eventing = new Eventing();
  constructor(
    protected rootUrl: string,
    protected deseriaizable: (json: K) => T
  ) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch = async (): Promise<void> => {
    await axios.get(this.rootUrl).then((response: AxiosResponse) => {
      response.data.forEach((value: K) => {
        this.collection.push(this.deseriaizable(value));
      });
      this.trigger("change");
    });
  };

  render(itemParent: Element): void {}

  abstract renderItem(model: T, itemParent: Element): void;
}
