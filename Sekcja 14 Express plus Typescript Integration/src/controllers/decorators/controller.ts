import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { MetaDataKeys } from "./MetaDataKeys";
import { Methods } from "./Methods";

export function Controller(routerPrefix: string) {
  return function (target: Function): void {
    const router = AppRouter.getInstance();
    for (let key in target.prototype) {
      const routHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetaDataKeys.path,
        target.prototype,
        key
      );
      const method: Methods = Reflect.getMetadata(
        MetaDataKeys.method,
        target.prototype,
        key
      );
      const middlewares =
        Reflect.getMetadata(MetaDataKeys.middleware, target, key) || [];
      if (path) {
        router[method](`${routerPrefix}${path}`, ...middlewares, routHandler);
      }
    }
  };
}
