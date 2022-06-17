import express from "express";
import "reflect-metadata";

export const router = express.Router();

export function Controller(routerPrefix: string) {
  return function (target: Function): void {
    for (let key in target.prototype) {
      const routHandler = target.prototype[key];
      const path = Reflect.getMetadata("path", target.prototype, key);
      if (path) {
        router.get(`${routerPrefix}${path}`, routHandler);
      }
    }
  };
}
