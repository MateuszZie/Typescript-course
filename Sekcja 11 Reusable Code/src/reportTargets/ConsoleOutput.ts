import { OutputTarget } from "../Summary";

export class ConsoleOutput implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
