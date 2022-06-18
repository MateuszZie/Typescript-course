import "reflect-metadata";
import { Methods } from "./Methods";

function routerBinding(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

export const get = routerBinding(Methods.get);
export const post = routerBinding(Methods.post);
export const put = routerBinding(Methods.put);
export const del = routerBinding(Methods.delete);
export const patch = routerBinding(Methods.patch);
