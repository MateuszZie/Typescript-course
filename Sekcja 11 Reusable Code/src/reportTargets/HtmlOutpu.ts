import fs from "fs";
import { OutputTarget } from "../Summary";

export class HtmlOutput implements OutputTarget {
  print(report: string): void {
    const html = `<div>
        <h1>Output example</h1>
        <h3>${report}<h3>
        </div>`;

    fs.writeFileSync("report.html", html);
  }
}
