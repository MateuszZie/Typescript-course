import { User } from "./../models/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on("change", () => {
      this.render();
    });
  }

  eventMap(): { [key: string]: () => void } {
    return {
      "click:.age-set": this.onSetAgeClicked,
      "click:.name-set": this.onSetNameClicked,
    };
  }

  onSetNameClicked = (): void => {
    const input = this.parent.querySelector("input");
    this.model.set({ name: input.value });
  };

  onSetAgeClicked = (): void => {
    this.model.setRandomAge();
  };

  eventBanding(fragment: DocumentFragment) {
    const eventMap = this.eventMap();

    for (let eventKay in eventMap) {
      const [eventName, selector] = eventKay.split(":");

      fragment.querySelectorAll(selector).forEach((elemnet) => {
        elemnet.addEventListener(eventName, eventMap[eventKay]);
      });
    }
  }

  template(): string {
    return `<div> <h1>
        User Form</h1>
        <div>User Name: ${this.model.get("name")}</div>
        <div>User Age: ${this.model.get("age")}</div>
        <input />
        <button class="name-set">Change name</button>
        <button class="age-set">Set Random Age</button>
        </div>`;
  }

  render(): void {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.eventBanding(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
