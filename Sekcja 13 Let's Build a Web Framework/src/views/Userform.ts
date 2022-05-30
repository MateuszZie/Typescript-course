import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      "click:.age-set": this.onSetAgeClicked,
      "click:.name-set": this.onSetNameClicked,
    };
  }

  onSetNameClicked = (): void => {
    const input = this.parent.querySelector("input");
    if (input) {
      this.model.set({ name: input.value });
    }
  };

  onSetAgeClicked = (): void => {
    this.model.setRandomAge();
  };

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
}
