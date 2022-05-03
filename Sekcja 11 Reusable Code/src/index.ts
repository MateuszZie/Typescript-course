import { WinAnalisis } from "./analyzers/WinAnaysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

const csv = new CsvFileReader("football.csv");
const reader = new MatchReader(csv);
reader.load();

const manUnited = new WinAnalisis("Man United");

console.log(manUnited.run(reader.matches));
