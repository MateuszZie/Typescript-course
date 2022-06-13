import "reflect-metadata";

@controller
class Plain {
  color: string = "red";

  @get("/login")
  fly(): void {
    console.log("wrrrrr");
  }
}

function get(path: string) {
  return function (target: Plain, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
}

function controller(target: typeof Plain): void {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata("path", target.prototype, key);
    console.log(path);
  }
}
