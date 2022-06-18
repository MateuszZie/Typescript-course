import { MetaDataKeys } from "./MetaDataKeys";

export function bodyValidtor(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    Reflect.defineMetadata(MetaDataKeys.validator, keys, target, key);
  };
}
