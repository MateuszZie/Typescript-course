import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const reader = MatchReader.fromCsv("football.csv");
reader.load();

const summary = Summary.winsAnalysisWithHtmlReport("Man United");
summary.buildAndPrintReport(reader.matches);
