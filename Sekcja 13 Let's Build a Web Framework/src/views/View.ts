import { Model } from "../models/Model";

export abstract class View<T extends Model<K>, K> {
  regions: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.bindModel();
  }

  abstract template(): string;

  eventMap(): { [kay: string]: () => void } {
    return {};
  }

  regionMap(): { [key: string]: string } {
    return {};
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventBinding(fragment: DocumentFragment) {
    const eventMap = this.eventMap();

    for (let eventKey in eventMap) {
      const [eventName, selector] = eventKey.split(":");

      fragment.querySelectorAll(selector).forEach((elemnet) => {
        elemnet.addEventListener(eventName, eventMap[eventKey]);
      });
    }
  }

  regionBinding(fragment: DocumentFragment) {
    const regionMap = this.regionMap();

    for (let regionKey in regionMap) {
      const selector = regionMap[regionKey];
      const elemenet = fragment.querySelector(selector);
      if (elemenet) {
        this.regions[regionKey] = elemenet;
      }
    }
  }

  onRender(): void {}

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.eventBinding(templateElement.content);
    this.regionBinding(templateElement.content);

    this.onRender();
    this.parent.append(templateElement.content);
  }
}
