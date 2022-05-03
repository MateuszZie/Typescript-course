import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchResault } from "../MatchResault";

export class WinAnalisis implements Analyzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === this.teamName && match[5] === MatchResault.HomeWin) {
        wins++;
      } else if (
        match[2] === this.teamName &&
        match[5] === MatchResault.AwayWin
      ) {
        wins++;
      }
    }
    return `${this.teamName} win ${wins} matches`;
  }
}
