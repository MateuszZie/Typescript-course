import { User, UserProps } from "../models/User";
import { View } from "./View";

export class UserForm extends View<User, UserProps> {
  eventMap(): { [key: string]: () => void } {
    return {
      "click:.age-set": this.onSetAgeClicked,
      "click:.name-set": this.onSetNameClicked,
      "click:.save-model": this.onSaveClick,
    };
  }

  onSaveClick = (): void => {
    console.log("clicked");
    this.model.save();
  };

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
    return `<div> 
        <input placeholder="${this.model.get("name")}"/>
        <button class="name-set">Change name</button>
        <button class="age-set">Set Random Age</button>
        <button class="save-model">Save User</button>
        </div>`;
  }
}
