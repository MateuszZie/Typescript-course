interface Reportabel {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: 2000,
  brooken: true,
  summary(): string {
    return `${this.name + " " + this.year + " " + this.brooken}`;
  },
};

const drink2 = {
  color: "brown",
  carbonate: true,
  sugar: 40,
  summary(): string {
    return `${this.color + " " + this.carbonate + " " + this.sugar}`;
  },
};

const printSummary = (item: Reportabel): void => {
  console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink2);
