import { WinAnalisis } from "./analyzers/WinAnaysis";
import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { ConsoleOutput } from "./reportTargets/ConsoleOutput";
import { HtmlOutput } from "./reportTargets/HtmlOutpu";
import { Summary } from "./Summary";

const csv = new CsvFileReader("football.csv");
const reader = new MatchReader(csv);
reader.load();

const summary = new Summary(new WinAnalisis("Man United"), new HtmlOutput());

summary.buildAndPrintReport(reader.matches);
