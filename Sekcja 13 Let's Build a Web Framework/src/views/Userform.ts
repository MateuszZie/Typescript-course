import { User } from "./../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {}

  eventMap(): { [key: string]: () => void } {
    return {
      "click:button": this.onButtonClick,
      "mouseenter:h1": this.mouseHoverH1,
    };
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

  onButtonClick(): void {
    console.log("Hi there!");
  }

  mouseHoverH1(): void {
    console.log("H1 howered");
  }

  template(): string {
    return `<div> <h1>
        User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input /> <button>Click Me</button>
        </div>`;
  }

  render(): void {
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.eventBanding(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
