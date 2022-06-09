import "reflect-metadata";

class Plain {
  color: string = "red";
}

Reflect.defineMetadata("myKey", "Hi There", Plain, "color");

const myKey = Reflect.getMetadata("myKey", Plain, "color");

console.log(myKey);
