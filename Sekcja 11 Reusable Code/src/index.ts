import fs from "fs";
import { CsvFileReader } from "./CsvFileReader";

const matches = new CsvFileReader("football.csv");
matches.read();

enum MatchResault {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWin = 0;

for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResault.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResault.AwayWin) {
    manUnitedWin++;
  }
}

console.log(manUnitedWin);
