import { CollectionView } from "../views/CollectionView";
import { User, UserProps } from "./User";
import { UserEdit } from "../views/UserEdit";

export class UserCollections extends CollectionView<User, UserProps> {
  renderItem(model: User, itemParent: Element): void {
    new UserEdit(itemParent, model).render();
  }

  render(itemParent: Element): void {
    itemParent.innerHTML = "";
    let html = "";
    const templateElement = document.createElement("template");

    this.fetch().then(() => {
      this.collection.forEach((item, index) => {
        html += `<div>User ${item.get("name")} is ${item.get(
          "age"
        )}  year old <button id="${index}">Update</button></div>`;
      });
      templateElement.innerHTML = html;
      itemParent.append(templateElement.content);
      itemParent.querySelectorAll("button").forEach((btn) =>
        btn.addEventListener("click", (e) => {
          if (e.currentTarget) {
            const target = e.currentTarget as Element;
            this.renderItem(
              this.collection[Number.parseInt(target.id)],
              itemParent
            );
          }
        })
      );
    });
  }
}
