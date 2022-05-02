import { CsvFileReader } from "./CsvFileReader";
import { MatchResault } from "./MatchResault";

const matches = new CsvFileReader("football.csv");
matches.read();

let manUnitedWin = 0;

for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResault.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResault.AwayWin) {
    manUnitedWin++;
  }
}

console.log(manUnitedWin);
