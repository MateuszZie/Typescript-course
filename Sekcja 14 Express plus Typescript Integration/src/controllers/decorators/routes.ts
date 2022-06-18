import "reflect-metadata";

function routerBinding(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata("path", path, target, key);
      Reflect.defineMetadata("method", method, target, key);
    };
  };
}

export const get = routerBinding("get");
export const post = routerBinding("post");
export const put = routerBinding("put");
export const del = routerBinding("delete");
export const path = routerBinding("path");
