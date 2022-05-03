import { WinAnalisis } from "./analyzers/WinAnaysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleOutput } from "./reportTargets/ConsoleOutput";
import { Summary } from "./Summary";

const csv = new CsvFileReader("football.csv");
const reader = new MatchReader(csv);
reader.load();

const summary = new Summary(new WinAnalisis("Man United"), new ConsoleOutput());

summary.buildAndPrintReport(reader.matches);
