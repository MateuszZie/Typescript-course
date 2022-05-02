import { CsvFileReader } from "./CsvFileReader";
import { MatchResault } from "../MatchResault";
import { dateStringToDate } from "../utils";

type MatchData = [Date, string, string, number, number, MatchResault, string];

export class MatchReader extends CsvFileReader<MatchData> {
  constructor(fileName: string) {
    super(fileName);
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
