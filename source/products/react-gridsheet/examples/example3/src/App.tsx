import * as React from "react";
import {
  GridSheet,
  Renderer,
  Parser,
  MatrixType,
  matrixIntoCells,
  aa2oa,
} from "react-gridsheet";
import "./App.css";

class ListRenderer extends Renderer {
  array(value: any[]) {
    return (
      <ul>
        {value.map((v, i) => (
          <li key={i}>{v}</li>
        ))}
      </ul>
    );
  }
  stringify({ value }: { value: any[] }): string {
    console.log({ value });
    if (Array.isArray(value)) {
      return value.join("\n");
    }
    return String(value) || "";
  }
}

class ListParser extends Parser {
  parseFunctions = [this.parseArray];
  parseArray(value: string): any[] {
    return value.split(/\n/g);
  }
}

const initialData: MatrixType = [
  [true, "Ichiro", "Baseball player", ["Curry Rice", "Baseball"]],
  [true, "Jiro", "Ramen shop owner", ["Ramen"]],
  [true, "Saburo", "Singer", ["Song"]],
  [true, "Shiro", "Sword master", ["Christianity"]],
  [true, "Goro", "Solo proprietorship", ["Eating alone"]],
];

export default function App() {
  const [tsv, setTsv] = React.useState("");

  return (
    <div className="App">
      <h1>Sloppy data</h1>
      <GridSheet
        initial={matrixIntoCells(initialData, {
          default: { height: 100 },
          A: { width: 50, style: { textAlign: "center" } },
          C: { width: 200 },
          D: { width: 400, renderer: "list", parser: "list" },
        })}
        options={{
          headerHeight: 30,
          sheetWidth: 600,
          sheetHeight: 600,

          renderers: {
            list: new ListRenderer(),
          },
          parsers: {
            list: new ListParser(),
          },
          onSave: (table) => {
            const matrix = table.getMatrixFlatten();
            const filtered = matrix
              .filter((row) => row[0])
              .map((row) => row.slice(1));
            setTsv(filtered.map((cols) => cols.join("\t")).join("\n"));
          },
          onChange: (table) => {
            const matrix = table.getMatrixFlatten();
            if (matrix != null) {
              console.log(
                "data onchange:",
                matrix && aa2oa(matrix, ["name", "occupation", "memo"])
              );
            }
          },
        }}
      />
      <p>TSV: (Ctrl+s to update)</p>
      <textarea
        placeholder="Inactive rows will be ommited"
        value={tsv}
        style={{ width: "100%", minHeight: "200px" }}
      ></textarea>
    </div>
  );
}
