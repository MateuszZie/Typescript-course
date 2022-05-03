import { WinAnalisis } from "./analyzers/WinAnaysis";
import { MatchData } from "./MatchData";
import { HtmlOutput } from "./reportTargets/HtmlOutpu";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(teamName: string): Summary {
    return new Summary(new WinAnalisis(teamName), new HtmlOutput());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }
}
