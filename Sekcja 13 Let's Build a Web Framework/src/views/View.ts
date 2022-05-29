import { User } from "./../models/User";

export abstract class View {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  abstract eventMap(): { [kay: string]: () => void };
  abstract template(): string;

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventBanding(fragment: DocumentFragment) {
    const eventMap = this.eventMap();

    for (let eventKay in eventMap) {
      const [eventName, selector] = eventKay.split(":");

      fragment.querySelectorAll(selector).forEach((elemnet) => {
        elemnet.addEventListener(eventName, eventMap[eventKay]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.eventBanding(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
