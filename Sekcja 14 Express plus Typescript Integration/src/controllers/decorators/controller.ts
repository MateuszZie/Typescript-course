import "reflect-metadata";
import { AppRouter } from "../../AppRouter";

export function Controller(routerPrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        router.get(`${routerPrefix}${path}`, routHandler);
      }
    }
  };
}
