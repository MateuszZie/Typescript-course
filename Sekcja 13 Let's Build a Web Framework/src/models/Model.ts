import { AxiosPromise, AxiosResponse } from "axios";

interface ModelAtributes<T> {
  get<K extends keyof T>(key: K): T[K];
  set(update: T): void;
  getAll(): T;
}
interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}
interface Syncs<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAtributes<T>,
    private sync: Syncs<T>,
    private events: Events
  ) {}

  get = this.attributes.get;

  on = this.events.on;

  trigger = this.events.trigger;

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
    this.trigger("change");
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
