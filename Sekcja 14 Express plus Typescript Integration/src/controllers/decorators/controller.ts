import "reflect-metadata";

export function Controller(routerPrefix: string) {
  return function (target: Function): void {
    for (let key in target.prototype) {
      const routHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
    }
  };
}
