import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResault } from "./MatchResault";

const csv = new CsvFileReader("football.csv");
const reader = new MatchReader(csv);
reader.load();

let manUnitedWin = 0;

for (let match of reader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResault.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResault.AwayWin) {
    manUnitedWin++;
  }
}

console.log(manUnitedWin);
