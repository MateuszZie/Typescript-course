import { NextFunction, Request, RequestHandler, Response } from "express";
import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { MetaDataKeys } from "./MetaDataKeys";
import { Methods } from "./Methods";

function bodyValidators(keys: string): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      res.status(422).send("invalid Request");
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send("invalid Request");
        return;
      }
    }
    next();
  };
}

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
        Reflect.getMetadata(MetaDataKeys.middleware, target.prototype, key) ||
        [];

      const validator =
        Reflect.getMetadata(MetaDataKeys.validator, target.prototype, key) ||
        [];
      if (path) {
        router[method](
          `${routerPrefix}${path}`,
          ...middlewares,
          bodyValidators(validator),
          routHandler
        );
      }
    }
  };
}
