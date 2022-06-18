import { RequestHandler } from "express";
import "reflect-metadata";
import { MetaDataKeys } from "./MetaDataKeys";
import { Methods } from "./Methods";

interface RouterHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routerBinding(method: string) {
  return function (path: string) {
    return function (target: any, key: string, desc: RouterHandlerDescriptor) {
      Reflect.defineMetadata(MetaDataKeys.path, path, target, key);
      Reflect.defineMetadata(MetaDataKeys.method, method, target, key);
    };
  };
}

export const get = routerBinding(Methods.get);
export const post = routerBinding(Methods.post);
export const put = routerBinding(Methods.put);
export const del = routerBinding(Methods.delete);
export const patch = routerBinding(Methods.patch);
