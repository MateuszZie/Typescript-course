import { AxiosPromise } from "axios";

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

export class Model {}
