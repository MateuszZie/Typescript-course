import fs from "fs";
import { MatchResault } from "./MatchResault";
import { dateStringToDate } from "./utils";

type MatchData = [Date, string, string, number, number, MatchResault, string];

export class CsvFileReader {
  data: MatchData[] = [];

  constructor(public fileName: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResault,
      row[6],
    ];
  }
}
