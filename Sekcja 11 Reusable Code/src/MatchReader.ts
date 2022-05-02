import { MatchResault } from "./MatchResault";
interface DataReader {
  read(): void;
  data: MatchData[];
}

type MatchData = [Date, string, string, number, number, MatchResault, string];

export class MatchReader {
  constructor(public reader: DataReader) {}
}
