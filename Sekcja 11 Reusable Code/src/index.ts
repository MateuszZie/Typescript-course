import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => row.split(","));

enum MatchResault {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWin = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResault.HomeWin) {
    manUnitedWin++;
  } else if (match[2] === "Man United" && match[5] === MatchResault.AwayWin) {
    manUnitedWin++;
  }
}

console.log(manUnitedWin);
