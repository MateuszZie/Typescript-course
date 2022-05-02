import fs from "fs";
import { MatchResault } from "./MatchResault";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResault,
  string
];

export abstract class CsvFileReader {
  data: MatchData[] = [];

  constructor(public fileName: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => row.split(","))
      .map(this.mapRow);
  }
}
