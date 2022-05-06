type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

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
