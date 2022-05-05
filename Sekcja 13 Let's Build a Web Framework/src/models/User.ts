interface UserProps {
  name?: string;
  age?: number;
}

type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    const events = this.events[eventName] || [];
    events.push(callback);
    this.events[eventName] = events;
  }

  trigger(eventName: string): void {
    const events = this.events[eventName];

    if (!events || events.length === 0) {
      return;
    }

    events.forEach((callback) => callback());
  }
}
