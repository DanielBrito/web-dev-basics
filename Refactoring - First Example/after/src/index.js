import { statement, htmlStatement } from "./statement";

import invoices from "./data/invoices.json";
import plays from "./data/plays.json";

function main() {
  for (let invoice of invoices) {
    console.log(statement(invoice, plays));
  }

  for (let invoice of invoices) {
    console.log(htmlStatement(invoice, plays));
  }
}

main();
